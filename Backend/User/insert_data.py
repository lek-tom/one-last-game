from fastapi import FastAPI, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.middleware.cors import CORSMiddleware
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
async def create_user(user: Request, db: AsyncSession = Depends(models.get_db)):
    print(user)
    db_user = models.User(user.json())
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)

    return db_user
