FROM python:3.8-slim

COPY ./backend /app/backend

WORKDIR /app/backend

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]