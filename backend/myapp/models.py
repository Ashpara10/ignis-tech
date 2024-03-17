# accounts/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
class User(AbstractUser):
    email = models.EmailField(unique=True)  # Add email field

    # Add any additional fields here if needed

    def __str__(self):
        return self.username

class Event(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event_name = models.CharField(max_length=100,default="DSA Bootcamp")
    data = models.TextField()
    location=models.CharField(max_length=50,default="Indore")
    is_liked=models.BooleanField(default=False)
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title