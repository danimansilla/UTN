/**
 * Trabajo práctico Unidad N° 1 (optativo)
Consigna:
Crear un servidor en node js que muestre el contenido de un archivo txt denominacion hola_mundo.txt (Crear el archivo)
Formato de entrega:
Enviar un archivo .rar o .zip con el siguiente formato: apellido_unidad2.rar
Dentro del .rar o .zip se debe enviar el/los archivos html, js y css
Fechas de entrega:
Se podra entregar esta unidad:
Hasta: 06/07/2020 23:55 hs
* El tamaño máximo del archivo permitido es de 10 MB. No se permite mas de un archivo.
 */


var http = require("http");
let fs = require("fs");

var serverNode = http.createServer(function (peticion, respuesta){
	
	fs.readFile('Archivos/hola_mundo.txt', 'utf-8', function (err, data) {
	  if(err) {
		console.log('error: ', err);
	  } else {
		respuesta.end(data);
	  }
	});
	
	
   
});

serverNode.listen(3000, function(){
   console.log("Tu servidor esta listo en " + this.address().port);
});