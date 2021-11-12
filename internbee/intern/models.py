from django.db import models

# Create your models here.
class Intern(models.Model):
    username = models.CharField(default="",max_length=50)
    user_email =models.CharField(default="",max_length=50)
    password = models.CharField(default="",max_length=50)
    role = models.IntegerField(default=2)
    first_name = models.CharField(default="",max_length=50)
    last_name = models.CharField(default="",max_length=50)
    university_name = models.CharField(default="",max_length=100)
    major = models.CharField(default="",max_length=100)
    gender = models.CharField(default="",max_length=50)
    cGpa = models.DecimalField(max_digits=3, decimal_places=2)

