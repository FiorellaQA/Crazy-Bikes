function validateForm(){
	var nombre = document.getElementById("name").value.trim();
	var apellido = document.getElementById("lastname").value.trim();
	var email = document.getElementById("input-email").value.trim();
	var contraseña = document.getElementById("input-password").value.trim();
	var select = document.getElementById("select").value;
	/*Todos los campos son obligatorios, excepto los dos últimos */
	if( ! (nombre && apellido && email && contraseña)){
		alert("Verifique que todos los campos estén llenos correctamente.");
		return false;
	}

	/*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z y 
	la primera letra debe ser mayúscula*/
	var myRe = /^([A-Z]{1}[a-zA-Z]+[\s]*)+$/;

	if( ! (myRe.test(nombre))){
		alert("Verificar que el campo contenga:\n. Caracteres de la A a la Z.\n. El primer caracter en mayúscula.");
		document.getElementById("name").focus();
		return false;
	} 
	if( ! (myRe.test(apellido))){
		alert("Verificar que el campo contenga:\n. Caracteres de la A a la Z.\n. El primer caracter en mayúscula.");
		document.getElementById("lastname").focus();
		return false;
	} 

	/*El campo password debe tener al menos 6 caracteres*/
	if(password.length != 6){
		alert("El password debe contener 6 caracteres.");
		return false;
	}
	/*El campo password no puede ser igual a "password" ó "123456" ó "098754"*/
	if( ! (contraseña == "password" && contraseña == "123456" && contraseña == "098754")){
		alert("La contraseña no debe ser password/123456/098754");
		return false;
	}

	if (select == "-1"){
		alert( "Porfavor seleccione una opcion." );
     	return false;
	}
	
	/*Validar que el campo email tenga un formato válido. Ej: name@domain.com
	
	/*El valor seleccionado de bicis, debe ser una de las opciones presentadas*/
	/*Si algún campo presenta error debe informarse al usuario por medio de un alert.*/
}