function validateForm(){
	var nombre = document.getElementById("name").value.trim();
	var apellido = document.getElementById("lastname").value.trim();
	var email = document.getElementById("input-email").value.trim();
	var password = document.getElementById("input-password").value.trim();
	var select = document.getElementById("select").value;
	/*Todos los campos son obligatorios, excepto los dos últimos */
	if( ! (nombre && apellido && email && password)){
		alert("Verifique que todos los campos estén llenos correctamente.");
		return false;
	}

	var myRe = /^([A-Z]{1}[a-zA-Z]+[\s]*)+$/;
		if( ! (myRe.test(nombre))){
			alert("Verificar que el nombre contenga:\n. Caracteres de la A a la Z.\n. El primer caracter (de cada nombre) en mayúscula.");
			document.getElementById("name").focus();
			return false;
		} 
		if( ! (myRe.test(apellido))){
			alert("Verificar que el apellido contenga:\n. Caracteres de la A a la Z.\n. El primer caracter (de cada apellido) en mayúscula.");
			document.getElementById("lastname").focus();
			return false;
		} 

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if( ! (re.test(email))){
    		alert("Verificar que el email tenga un formato válido.\nEj: name@domain.com");
    		document.getElementById("input-email").focus();
    		return false;
    	}

		if(password.length < 6){
			alert("El password debe contener más de 6 caracteres.");
			document.getElementById("input-password").focus();
			return false;
		}

		if( password == "password" || password == "123456" || password == "098754"){
			alert("La contraseña no debe ser:\n. password\n. 123456\n. 098754");
			document.getElementById("input-password").focus();
			return false;
		}
		/*El valor del select debe ser contenido en el arreglo.
		  Si no está, indexof retorna -1 */
		if (['urbana', 'treking', 'electrica', 'estatica'].indexOf(select) < 0){
			alert( "Porfavor seleccione una opcion." );
     		return false;
		}
}