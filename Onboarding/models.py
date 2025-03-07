from django.db import models
import random

# Create your models here.
import random
from django.db import models

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    employee_id = models.CharField(max_length=7, unique=True)

    def save(self, *args, **kwargs):
        if not self.employee_id:
            self.employee_id = self.generate_employee_id()
        super().save(*args, **kwargs)
        
    def generate_employee_id(self):
        return f"{random.randint(1000, 9999):06d}"

    def __str__(self):
        return f"{self.username} ({self.employee_id})"