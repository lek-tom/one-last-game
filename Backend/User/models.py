import uuid

from sqlalchemy import String, Integer, ForeignKey
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base, Mapped, mapped_column
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel, EmailStr
from uuid import uuid4

from sqlalchemy_utils import UUIDType

# connect to data base
engine = create_async_engine('sqlite+aiosqlite:///sqlalchemy.sqlite', echo=True)
SessionLocal = async_sessionmaker(engine)


def generate_uuid():
    return int(uuid.uuid4())


Base = declarative_base()


class UserCreate(BaseModel):
    user_id: uuid.UUID = uuid4()
    email: EmailStr
    name: str
    surname: str
    phone_number: str
    password: str
    sex: str


class User(Base):
    __tablename__ = "users"

    user_id: Mapped[uuid] = Column("user_id", UUIDType(binary=False), primary_key=True, default=uuid4, index=True)

    email: Mapped[String] = mapped_column("email", String, nullable=False, unique=True)
    name: Mapped[String] = mapped_column("name", String, nullable=False)
    surname: Mapped[String] = mapped_column("surname", String, nullable=False)
    phone_number: Mapped[String] = mapped_column("phone_number", String, nullable=False, unique=True)
    password: Mapped[String] = mapped_column("password", String, nullable=False)
    sex: Mapped[String] = mapped_column("sex", String, nullable=False)

    def __init__(self, user_id, email, name, surname, phone_number, password):
        self.user_id = user_id
        self.email = email
        self.name = name
        self.surname = surname
        self.phone_number = phone_number
        self.password = password

    def dict(self):
        return {
            "id": self.user_id,
            "email": self.email,
            "name": self.name,
            "surname": self.surname,
        }


# class Task(Base):
#     __tablename__ = "tasks"
#
#     task_id: Mapped[uuid] = mapped_column("task_id", Integer, primary_key=True, index=True, default=generate_uuid())
#     created: Mapped[String] = mapped_column("created", String, nullable=False)
#     updated: Mapped[String] = mapped_column("updated", String, nullable=False)
#     priority: Mapped[String] = mapped_column("priority", String, nullable=False)
#     status: Mapped[String] = mapped_column("status", String, nullable=False)
#     task: Mapped[String] = mapped_column("task", String, nullable=False)
#     user_id: Mapped[Integer] = mapped_column("user_id", Integer, ForeignKey("users.user_id"))
#
#     def dict(self):
#         return {
#             "id": self.task_id,
#             "created": self.created,
#             "status": self.status,
#             "task": self.task,
#             "user_id": self.user_id,
#         }


async def get_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    db = SessionLocal()
    try:
        yield db
    finally:
        await db.close()
