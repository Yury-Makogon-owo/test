from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'lib/', include('lib.urls')),
    url(r'^admin/', admin.site.urls),
    ]
