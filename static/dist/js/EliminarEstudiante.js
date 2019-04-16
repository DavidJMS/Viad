function EliminarEstudiante(id_PerfilEstudiante){
  console.log("voy a eliminar un miebro que tenga el id = " + id_PerfilEstudiante); 
  swal({
            title: '¿Estas seguro que deseas eliminar este Estudiante?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/Estudiantes/Eliminar',
                  method: 'GET',
                  data:{
                    'id_PerfilEstudiante':id_PerfilEstudiante
                  },
                  dataType: 'json',
                  success: function (response) {
                    if(response == 200){
                      $("#NuevoEstudiante-"+id_PerfilEstudiante).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Estudiante ha sido eliminado',
                        'success'
                      )
                      
                    }
                  },
                  error:function() {
                    console.log('error');
                  },
                });
              
            }
          })
  
}