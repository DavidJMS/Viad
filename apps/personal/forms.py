from django import forms
## models form 
from apps.personal.models import PerfilUsuario
from apps.personal.models import Usuario
from django.forms import ModelForm, Media,TextInput, NumberInput,EmailInput,URLInput,PasswordInput,FileInput,Textarea,DateInput,DateTimeInput,Select

class Usuarios(forms.ModelForm):
	class Meta:
		model  = PerfilUsuario
		fields = [
		'Nombres',
		'Apellidos',
		'Dni',
		'Edad',
		'Telefono',
		'Gmail',
		'Genero',
		'Pais',
		'Address',
		]
		labels = {
		'Nombres':'Nombre',
		'Apellidos':'Apellidos',
		'Dni': 'Documento de Identidad',
		'Edad': 'Edad',
		'Telefono':'Numero Telefonico',
		'Gmail':'Correo Electronico',
		'Genero':'sexo',
		'Pais':'Pais',
		'Address':'Direccion',
		}
		widgets = {
		'Nombres': TextInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese los nombres'}),

		'Apellidos': TextInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese los apellidos'}),

		'FechadeIngreso': DateInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese la fecha de ingreso'}),

		'Cedula': TextInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese Documento De Identidad'}),

		'Numerodetelefono': TextInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese numero telefonico'}),

		'Gmail': EmailInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese correo electronico'}),

		'Age': NumberInput(
					attrs={
						'class':'form-control',
						'required':'False',
						'autocomplete':'off',
						'placeholder':'Ingrese su edad'
						}
					),

		'Genero': Select(
					attrs={
						'class':'form-control',
						'required':'False',
						'autocomplete':'off',
						'placeholder':'Ingrese su sexo'
						}
					),

		'Address': Textarea(
					attrs={
						'class':'form-control',
						'required':'False',
						'autocomplete':'off',
						'placeholder':'Ingrese su direccion'
						}
					),

		'Pais': Select(
					attrs={
						'class':'form-control',
						'required':'False',
						'autocomplete':'off',
						'placeholder':'Ingrese el pais de donde ingresa'
						}
					),
		}

class Usuarios2(forms.ModelForm):
	class Meta:
		fields = [
		'Name',
		'Contrasena',
		'ContrasenaConfirmacion',
		]
		labels = {
		'Name':'Nombre de usuario',
		'Contrasena':'Contraseña de usuario',
		'ContrasenaConfirmacion':'Repetir contraseña de usuario',
		}
		widgets = {
		'Name': TextInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Ingrese numero telefonico'}),
		'Contrasena': PasswordInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Contraseña'}),
		'ContrasenaConfirmacion': PasswordInput(attrs={'class':'form-control', 
			  'required':'False',
			  'disabled':False,
			  'autocomplete':'off',
			   'placeholder':'Repetir Contraseña'})
		}
