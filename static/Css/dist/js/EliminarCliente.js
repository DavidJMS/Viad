

function EliminarCliente(id){
  swal({
            title: '¿Estas seguro que deseas eliminar este proveedor?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/clientes/Eliminar',
                  method: 'GET',
                  data:{
                    'id_cliente':id
                  },
                  dataType: 'json',
                  success: function (response) {
                    if(response == 200){
                      $("#registro-"+id).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Mensaje ha sido eliminado',
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


