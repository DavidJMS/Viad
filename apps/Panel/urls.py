from django.conf.urls import url
from django.contrib import admin
from apps.Panel.views import *
urlpatterns = [
	url(r'^Entrar/$', Login, name='Login' ),
	url(r'^Salir/$', Logout, name='Logout' ),
]