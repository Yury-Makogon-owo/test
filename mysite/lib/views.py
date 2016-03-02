
#from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, filters
from .serializers import *


class StudentViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #queryset = Student.objects.all()
    #serializer_class = StudentSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BooksViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BooksSerializer

    def list(self, request, *args, **kwargs):
        self.queryset = Book.objects.all()
        serializer_class = BooksSerializer
        return super(BooksViewSet, self).list(request, *args, **kwargs)
