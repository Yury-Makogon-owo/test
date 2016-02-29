from django.conf.urls import url, patterns, include
from rest_framework.routers import DefaultRouter

from views import *

router = DefaultRouter()
router.register(r'book', BookViewSet)
router.register(r'user', StudentViewSet)
#router.register(r'book', BookViewSet)


urlpatterns = [
    #"",
    url(r'^', include(router.urls)),
]
