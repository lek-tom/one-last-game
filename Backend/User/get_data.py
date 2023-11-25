import models
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=models.engine)
session = Session()

for row in session.query(models.User).all():
    print(row.user_id, row.email, row.name, row.surname, row.phone_number, row.password)

