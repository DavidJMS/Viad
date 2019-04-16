from django.conf.urls import url 
from apps.Inicio.views import Servicios
from apps.Inicio.views import Quienessomos
from apps.Inicio.views import Contactanos
urlpatterns = [
    #url(r'^lista/$',listadeusuarios,name='listadeusuarios') , 
    url(r'^Servicios/$',Servicios , name='Servicios' ),
    url(r'^Nosotros/$',Quienessomos , name='Nosotros' ),
    url(r'^Contactanos/$',Contactanos , name='Contactanos' ),

]