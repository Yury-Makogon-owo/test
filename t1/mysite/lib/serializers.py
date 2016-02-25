from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Book

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
                'username', 'last_login',
                'date_joined', 'is_active')

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = (
                'date', 'title', 'owner'
                )
