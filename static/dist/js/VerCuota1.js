function VerCuota(Cedula_Estudiante) { 

  swal({
            title: '¿Estas seguro que deseas eliminar este Perfil?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
            $.ajax({
              // la URL para la petición
              url : 'http://localhost:8000/Estudiantes/VerCuotas/',
              // la información a enviar
              // (también es posible utilizar una cadena de datos)
              
              data : { 
              'Cedula_Estudiante':Cedula_Estudiante
                },
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success : function(status) {
                  if(status == 200){
                    console.log('Listo')
                    //haremos algo
                  }
                  else{
                    console.log('Hemos tenido un error al procesar tu solicitud')
                  }
                  
                },
             
                // código a ejecutar si la petición falla;
                // son pasados como argumentos a la función
                // el objeto de la petición en crudo y código de estatus de la petición
                error : function(xhr, status) {
                  console.log('el servidor no respondio') 
                },
             
                // código a ejecutar sin importar si la petición falló o n
            });
              
            }
          })
  
}