from fastapi import FastAPI, Depends, Request, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

import models
from sqlalchemy.orm import sessionmaker

app = FastAPI()
# bro did NOT cook anything
Session = sessionmaker(bind=models.engine)
session = Session()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/login/register")
async def create_user(request: Request, db: AsyncSession = Depends(models.get_db)):
    data = await request.json()
    print(data)
    user_data = models.UserCreate.model_validate(data)

    if len(user_data.surname) < 3:
        raise HTTPException(status_code=400, detail="Surname must be at least 3 characters long.")

    db_user = models.User(**user_data.model_dump())
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)

    return JSONResponse(content={"Success": "User created successfully"}, status_code=200)
