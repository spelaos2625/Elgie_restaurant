function validarTexto(event) {
    console.log(event.keyCode);
    
    return (event.keyCode == 8 || !(event.keyCode >= 48 && event.keyCode <= 59));
}

function validarNumero(event) {
  
    return (event.keyCode == 8 || (event.keyCode >= 48 && event.keyCode <= 59));
}