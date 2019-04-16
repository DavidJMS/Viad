from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth import logout as logout_django
# Create your views here.

def Login(request):
	if request.method == 'POST':
		usuario =  request.POST['usuario']
		password = request.POST['password']
		user = authenticate(username=usuario , password = password)
		if user is not None:
			login_django(request, user)
			return redirect('Panel:Inicio')
		else:
			print('usuario invalido')
	return render(request, 'Panel/Login.html')


@login_required(login_url = 'Panel:Login' )
def Logout(request):
	logout_django(request)
	return redirect('Panel:Login')