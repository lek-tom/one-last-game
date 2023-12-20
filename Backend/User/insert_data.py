from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession

import models
from sqlalchemy.orm import sessionmaker

app = FastAPI()
#bro did NOT cook anything
Session = sessionmaker(bind=models.engine)
session = Session()


@app.post("/login/register")
async def create_user(user: models.UserCreate, db: AsyncSession = Depends(models.get_db)):
    print(user)
    db_user = models.User(**user.model_dump())
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)

    return db_user
