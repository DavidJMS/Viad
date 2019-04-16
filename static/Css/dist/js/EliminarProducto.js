function EliminarProducto(id){
  swal({
            title: '¿Estas seguro que deseas eliminar este prducto?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                  url: 'http://localhost:8000/Inventario/Eliminar',
                  method: 'GET',
                  data:{
                    'id_Producto':id
                  },
                  dataType: 'json',
                  success: function (response) {
                    if(response == 200){
                      $("#Producto-"+id).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Producto ha sido eliminado',
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