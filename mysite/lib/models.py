from __future__ import unicode_literals

from django.db import models

class Book(models.Model):
    date = models.DateTimeField('date published')
    title = models.CharField(max_length=200)
    owner = models.CharField(max_length=200)
    #TODO: change to models.User

#class

