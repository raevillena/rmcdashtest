from django.db import models
from django.contrib.auth.models import User


class Store(models.Model):
    messageID = models.CharField(primary_key=True, max_length=100, unique=True)
    message = models.CharField(max_length=10000, blank=True)
    owner = models.ForeignKey(User, related_name="stores", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
