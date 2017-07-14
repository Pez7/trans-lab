$(document).ready(function(){
	$('.button-collapse').sideNav();
	$('select').material_select();

	$('#inicio').click(function(element){
		element.preventDefault();
			validarCorreo();
			validarPass();

    	if (validarCorreo() && validarPass()){
    		window.open("home.html","_self", false);
    	}
	});
});
        function validarCorreo() {
            var correo = $('#email').val();
            var verificar = (/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email));
            if (correo != verificar && pass == "") {
            	alert('Ingrese un correo válido');
            }else{
            	return true;
            }
        };

        function validarPass(){
			var pass = $('#pass').val();
			if (pass.length > 8 && pass == ""){
				alert('Ingresa una contraseña válida');
				return false;
			}else{
				return true;
			}
        };
















