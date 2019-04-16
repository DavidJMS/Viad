from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.http import HttpResponse
#-------------------------------------ss-
#--------------------------------------
# Create your views here.

def Servicios(request):
	
	return render(request, 'Inicio/Servicios.html')

def Quienessomos(request):
	
	return render(request, 'Inicio/nosotros.html')
	
def Contactanos(request):
	
	return render(request, 'Inicio/Contactanos1.html')

