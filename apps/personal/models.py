from django.db import models
from django.conf import settings
# Create your models here.
Sexo_Choices = (
    ('Masculino', 'Masculino'),
    ('Femenino', 'Femenino'),
    )

Pais_Choices ={
	('Argentina', 'Argentina'),
    ('Bolivia', 'Bolivia'),
    ('Brasil', 'Brasil'),
    ('Chile', 'Chile'),
    ('Colombia', 'Colombia'),
    ('Costa Rica', 'Costa Rica'),
    ('Ecuador', 'Ecuador'),
    ('El Salvador', 'El Salvador'),
    ('Guatemala', 'Guatemala'),
    ('Haití', 'Haití'),
    ('Honduras', 'Honduras'),
    ('México', 'México'),
    ('Nicaragua', 'Nicaragua'),
    ('Panamá', 'Panamá'),
    ('Paraguay', 'Paraguay'),
    ('Perú', 'Perú'),
    ('República Dominicana', 'República Dominicana'),
    ('Uruguay', 'Uruguay'),
    ('Venezuela', 'Venezuela'),
}

class PerfilUsuario(models.Model):
	Nombres 	= models.CharField(max_length=10, null=True, default='Sin nombre')
	Apellidos 	= models.CharField(max_length=20, null=True, default='Sin apellido')
	Dni 		= models.CharField(max_length=10, null=True, default='Sin Dni')
	Edad 		= models.IntegerField(null=True, default=0)
	Telefono 	= models.CharField(max_length=30, null=True, default='0000')
	Genero 		= models.CharField(max_length=300,null=False,choices=Sexo_Choices,default='----')
	Gmail  		= models.EmailField(default='sin@datos.com', null=True)
	Pais        = models.CharField(max_length=300,null=False,choices=Pais_Choices,default='----')
	Address     = models.TextField(default='Sin Datos', null=True)

class Usuario(models.Model):
    Name                   = models.CharField(max_length=10, null=True, default='Sin nombre')
    Contrasena             = models.CharField(max_length=10, null=True, default='False')
    ContrasenaConfirmacion = models.CharField(max_length=10, null=True, default='False')
    

    