from django.shortcuts import render, redirect
from django.http import HttpResponse
import json
from django.http import JsonResponse
from django.core import serializers
from apps.personal.models import PerfilUsuario
from apps.personal.models import Usuario
from apps.personal.forms import Usuarios

def NuevoUsuario(request):
	Form = Usuarios()
	if request.method == 'POST':
		Form  = Usuarios(request.POST, request.FILES  or None)
		if Form.is_valid():
			Form.save()
			
		else:
			print('Error datos invalidos')
	contexto = {
		'Form':Form
	}
	return render(request, 'Usuario/NuevoUsuario.html', contexto)


def NuevoUsuario2(request):
	Form = Usuarios2()
	if request.method == 'POST':
		Form  = Usuarios2(request.POST, request.FILES  or None)
		if Form.is_valid():
			Form.save()
			
		else:
			print('Error datos invalidos')
	contexto = {
		'Form':Form
	}
	return render(request, 'Usuario/NuevoUsuario2.html', contexto)