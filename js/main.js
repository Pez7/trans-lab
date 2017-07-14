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
	});

	$('#agregar-tarjeta').click(function(){
		var numTarj = $('#tarjeta').val();
		$('.num-perfil').append("<div class='row'>"+
									"<div class='col s12 center'>"+
										"<a class='tarj- text-lowercase btn'>"+numTarj+"</a>"+
									"</div>"+
								"</div>");
		$('#tarjeta').val("");
	});

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
		$('.insert-saldo').append("<div class='row'>"+
										"<div class='saldo col s12 center'>"+
											"<p>SALDO TOTAL</p>"+
										"</div>"+
									"</div>"+
									"<div class='row'>"+
										"<div class='number col s12 center'>"+
											"<p>"+e.saldoTarjeta+"</p>"+
										"</div>"+
									"</div>");
     })
    $('#saldo-tarj').val("");
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
















