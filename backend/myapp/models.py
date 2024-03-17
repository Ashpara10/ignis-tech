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
    image=models.CharField(max_length=2000,default="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D")
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title