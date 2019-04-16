function EliminarIngreso(id) {
	swal({
		  title: '¿Estas Seguro?',
		  text: "¿Estas Seguro de que deseas eliminar este Ingreso?",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Quiero Eliminarlo!'
		}).then(function (result) {
           if(result.value){
           	var screen = $('#loading-screen');
    		
            $.ajax({
		    
		    url : 'http://localhost:8000/Caja/Borrar/Ingreso/',
		  	method: 'GET',
		    data : { 
		    	'id_Ingreso':id,
		    },
		    
		    dataType : 'json',
		    
		    success : function(status) {
		    	if (status == 200) {
		    		
		    		swal(
					      'Borrado!',
					      'Hemos Borrado satisfactoriamente lo pedido.',
					      'success'
					    );
		        	location.href ="http://localhost:8000/Caja/Ingresos/Lista";
		    	}
		    	else{
		    		swal("OOOh!", "Hemos tenido un problema", "error")
		    	}
		    },
		 		 
		});
           }
        });
}


