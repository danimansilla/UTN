function enviado(){
	validar();
	window.alert("Se ha enviado correctamente");
};

 function validar() {

	if(document.form.nombre.value.length == 0){
		alert("Debe ingresar el nombre.");
		document.form.nombre.focus();
		return 0;
	}
	if(document.form.apellido.value.length == 0){
		alert("Debe ingresar el apellido.");
		document.form.apellido.focus();
		return 0;
	}
	if((/^\d{8}$/.test(document.form.dni.value)) == 0){
		alert("El DNI  debe ser de 8 digitos númericos");
		document.form.dni.focus();
		return 0;
	}

	var regexp=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	if(!(regexp.test(document.form.email.value)) == true){
		alert("El Email debe contener un @ y caracteres válidos");
		document.form.email.focus();
		return 0;
	}

}