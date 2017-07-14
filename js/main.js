$(document).ready(function(){
	$('.button-collapse').sideNav();
	$('select').material_select();

	$('#inicio').click(function(element){
		element.preventDefault();
			validarCorreo();
			validarPass();
	if (validarCorreo() && validarPass()){
    		window.location.href = "home.html";
    	}
	});

	$('#saldo').click(function(){
		ajax();
	})
});



	function ajax(){
		var saldo = $('#saldo-tarj').val();
    $.ajax({
    	url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${saldo}`,
    	type: 'GET',
    	dataType: 'json',
    	data: {limit: ''},
    })
    .done(function(e) {
		$('.number').append("<p>"+e.saldoTarjeta+"</p>");
     })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
};



        function validarCorreo() {
            var correo = $('#email').val();
            var verificar = (/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(correo));
            if (correo != verificar && pass == "") {
            	alert('Ingrese un correo válido');
            }else{
            	return true;
            }
        };

        function validarPass(){
			var pass = $('#pass').val();
			if (pass.length > 8){
				alert('Ingresa una contraseña válida');
				return false;
			}else{
				return true;
			}
        };
















