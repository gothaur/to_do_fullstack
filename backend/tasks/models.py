from django.contrib.auth import (
    get_user_model,
)
from django.db import models

User = get_user_model()


class Task(models.Model):

    completed = models.BooleanField(
        default=False,
    )
    created_date = models.DateTimeField(
        auto_now_add=True,
    )
    deadline = models.DateField()
    description = models.CharField(
        max_length=512,
    )
    name = models.CharField(
        max_length=128,
    )
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
