from rest_framework import serializers

from .models import Book, Student

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = (
                'username',
                'uuid', 'specialization')

class BookSerializer(serializers.HyperlinkedModelSerializer):
    owner = StudentSerializer()
    class Meta:
        model = Book
        fields = (
                'date', 'title', 'owner', 'pages', 'id', 'returned',
                'publisher', 'number', 'author'
                )
