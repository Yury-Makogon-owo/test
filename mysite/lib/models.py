from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractBaseUser
import uuid

def makr_uuid():
    return str(uuid.uuid1().int>>64)


class Student(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    uuid = models.CharField(max_length=35, primary_key=True, default=makr_uuid)
    specialization = models.CharField(max_length=20)

    def get_username(self):
        return self.username


class Book(models.Model):
    date = models.DateTimeField('date of publish')
    title = models.CharField(max_length=200)
    owner = models.ForeignKey(Student, null=True)
    pages = models.IntegerField()
    id = models.CharField(max_length=35, primary_key=True, default=makr_uuid)
    returned = models.DateTimeField(null=True)
    publisher = models.CharField(max_length=200)
    number = models.IntegerField()
    author = models.CharField(max_length=200)


