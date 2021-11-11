from django.db import models

class Company(models.Model):
    username = models.CharField(default="",max_length=50)
    user_email =models.CharField(default="",max_length=50)
    password = models.CharField(default="",max_length=50)
    role = models.IntegerField(default=0)
    company_name = models.CharField(default="",max_length=50)
    description = models.CharField(default="",max_length=500)
    city_name = models.CharField(default="", max_length=50)
    address = models.CharField(default="",max_length=50)

    # def __str__(self):
    #     return self.username
    

# Create your models here.
