from django.conf.urls import url 
from apps.personal.views import NuevoUsuario
from apps.personal.views import Usuario
urlpatterns = [
    #url(r'^lista/$',listadeusuarios,name='listadeusuarios') , 
    url(r'^Registro$',NuevoUsuario , name='NuevoUsuario' ),
    url(r'^Registro/Usuario$',Usuario , name='Usuario' ),
]