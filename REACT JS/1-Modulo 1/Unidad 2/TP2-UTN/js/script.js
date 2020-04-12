var resultado =0;
var operacion;
var entroOperacion = false;
$(function() {
    $(document).on('click', 'input[type="button"]', function(event) {
       let id = this.id;
       console.log("Se presionó el Boton con Id :"+ id)
       operacion=id;
     
     });
   });
   function resetear(){
    operacion= null;
    document.getElementById('result').value = null;
    document.getElementById('num1').value = null;
    document.getElementById('num2').value = null;
    document.getElementById('result').innerHTML = null;

 }
function sumar() {
    var num1 = 0;
    var num2 =0;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = Number(num1) + Number(num2);
    document.getElementById('result').innerHTML = resultado;
    // alert(num1 +" + " + num2 +" es: " + resultado);
}
function restar() {
    var num1 = 0;
    var num2 =0;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = Number(num1) - Number(num2);
    document.getElementById('result').innerHTML = resultado;
    // alert(num1 +" - " + num2 +" es: " + resultado);
}
function multiplicar() {
    var num1 = 0;
    var num2 =0;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = Number(num1) * Number(num2);
    document.getElementById('result').innerHTML = resultado;
    // alert(num1 +" * " + num2 +" es: " + resultado);

}
function dividir() {
    
    var num1 = 0;
    var num2 =0;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    if(num2==0){
        alert("No se puede dividir por cero");
        resetear();
    }else{
        resultado = Number(num1) / Number(num2);
        document.getElementById('result').innerHTML = resultado;
         // alert(num1 +" / " + num2 +" es: " + resultado);
    }
    
   
}
function operacionResolver(){
   
    if(operacion=="sumar"){
        sumar();
    }
     if(operacion=="dividir"){
        dividir();
    }
     if(operacion== "restar"){
        entroOperacion=true;
        restar();
    }
    if(operacion=="multiplicar"){
        entroOperacion=true;
        multiplicar(); 
    }
    
}
function validarSiIngresoNumeros(){
    var num1C = document.getElementById("num1").value;
    var num2C = document.getElementById("num2").value;
    if(num1C=="" && num2C=="" && operacion== ""){
        entroOperacion=false;
        return entroOperacion;
    }
    else{
        if(num1C=="" || num2C=="" || operacion== "" ){
         entroOperacion=false;
        return entroOperacion;
        }else{
            entroOperacion=true;
            return entroOperacion;
        }
       
    }
}
function resolver(){
    validarSiIngresoNumeros();
    if(entroOperacion){
        operacionResolver();
        
    }else{
        alert("Debe ingresar los datos primero");
    }

    
}


