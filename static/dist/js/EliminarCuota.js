function EliminarCuota(id_RegistrodeCuotas){ 
  swal({
            title: '¿Estas seguro que deseas eliminar esta Cuota?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/Registro/Eliminar/Cuota/',
                  method: 'GET',
                  data:{
                    'id_RegistrodeCuotas':id_RegistrodeCuotas
                  },
                  dataType: 'json',
                  success: function (status) {
                    if(status == 200){
                      $("#NuevoCuota-"+id_RegistrodeCuotas).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Cuota ha sido eliminada',
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