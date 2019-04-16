function EliminarCarrera(id_Carrera){ 
  swal({
            title: '¿Estas seguro que deseas eliminar esta Carrera?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/Carrera/Eliminar/',
                  method: 'GET',
                  data:{
                    'id_Carrera':id_Carrera
                  },
                  dataType: 'json',
                  success: function (status) {
                    if(status == 200){
                      $("#NuevoCarrera-"+id_Carrera).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Carrera ha sido eliminada',
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