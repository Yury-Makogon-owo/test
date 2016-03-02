from rest_framework import serializers

from .models import *#Book#, Student

#class UserSerializer(serializers.HyperlinkedModelSerializer):
class UserSerializer(serializers.HyperlinkedModelSerializer):
    #uuid = serializers.SerializerMethodField('first_name')
    #specialization = serializers.SerializerMethodField('last_name')

    class Meta:
        model = User
        fields = (
                'username',
                'uuid', 'specialization')

class BookSerializer(serializers.HyperlinkedModelSerializer):
    #current_owner = serializers.RelatedField(source='user.username')
    #owner = UserSerializer()
    #     = serializers.RelatedField(source='cateory', read_only=True)
    class Meta:
        model = Book
        #depth = 1
        fields = (
                'date', 'title', 'owner', 'pages', 'id', 'returned',
                'publisher', 'number', 'author'
                )

class BooksSerializer(BookSerializer):
    owner = UserSerializer()
