function EliminarInscripcion(id_RegistrodeInscripcion){ 
  swal({
            title: '¿Estas seguro que deseas eliminar esta Inscripcion?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/Registro/Eliminar/Inscripcion/',
                  method: 'GET',
                  data:{
                    'id_RegistrodeInscripcion':id_RegistrodeInscripcion
                  },
                  dataType: 'json',
                  success: function (status) {
                    if(status == 200){
                      $("#NuevoRegistrodeInscripcion-"+id_RegistrodeInscripcion).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Inscripcion ha sido eliminada',
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