setInterval(function () {
if ($('#MensajeAEnviar').val() == "" ) {
	$('#BotonDeEnviar').attr('disabled', 'disabled');
	$('#BotonDeEnviar').addClass('btn-warning');
	$('#BotonDeEnviar').text('No se puede enviar contenedor vacio');
	$('#error').removeClass('hidden');

}
else{
	$('#BotonDeEnviar').removeAttr('disabled');
	$('#BotonDeEnviar').removeClass('btn-warning');
	$('#BotonDeEnviar').addClass('btn-primary');
	$('#BotonDeEnviar').text('enviar');
	$('#error').addClass('hidden');
	$('#BotonDeEnviar2').removeAttr('disabled');

if ($('#MensajeAEnviar').val() < 9 ) {
	$('#BotonDeEnviar').attr('disabled', 'disabled');
	$('#BotonDeEnviar').addClass('btn-warning');
	$('#BotonDeEnviar').text('No se puede enviar contenedor vacio');
	$('#error').removeClass('hidden');
}

$.ajax({
		    // la URL para la petición
		    url : '/Chat/Mensaje/Lista/',
		    // la información a enviar
		    // (también es posible utilizar una cadena de datos)
		    
		    // el tipo de información que se espera de respuesta
		    dataType : 'json',
		    // código a ejecutar si la petición es satisfactoria;
		    // la respuesta es pasada como argumento a la función
		    success : function(data) {
		    	if(data){
		    		var cuerpo = ""
		    		for (var i = 0 ; i < data.length; i++) {
		    			console.log(data)
		    			cuerpo += '<div class="col-md-12">'+
									'<h2>Nombre: '+data[i].fields.usuario+'</h2>'+
									'<p>'+ data[i].fields.mensaje +'</p>'+
								'</div>';
		    		}
		    		$('#contenedorDeMensaje').html(cuerpo);

		    	}
		    	else{
		    		console.log('hemos tenido un error al procesar tu solicitud')
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

function EnviarMensaje() {
	var mensaje = $('#MensajeAEnviar').val();
	var usuario = $('#usuarioMensaje').val();
	var template = '<div class="col-md-12">'+
						'<h2>Nombre: '+usuario+'</h2>'+
						'<p>'+ mensaje +'</p>'+
					'</div>';

	$('#contenedorDeMensaje').append(template);
	$('#MensajeAEnviar').val("");

	//enviar peticion ajax

	$.ajax({
		    // la URL para la petición
		    url : '/Chat/Mensaje/Nuevo/',
		    // la información a enviar
		    // (también es posible utilizar una cadena de datos)
		    data : { 
		    	'usuarioajax':usuario,
		    	'mensajeajax':mensaje
		    },
		    // el tipo de información que se espera de respuesta
		    dataType : 'json',
		    // código a ejecutar si la petición es satisfactoria;
		    // la respuesta es pasada como argumento a la función
		    success : function(status) {
		    	if(status == 200){
		    		console.log('todo bien')
		    	}
		    	else{
		    		console.log('hemos tenido un error al procesar tu solicitud')
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