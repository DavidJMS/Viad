function EliminarUsuario(id){
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
                  url: 'http://localhost:8000/Usuarios/Eliminar',
                  method: 'GET',
                  data:{
                    'id_Usuarios':id
                  },
                  dataType: 'json',
                  success: function (response) {
                    if(response == 200){
                      $("#UsuarioFormulario-"+id).addClass('hidden')
                      swal(
                        'Eliminado',
                        'Tu Perfil ha sido eliminado',
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