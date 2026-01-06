function precioCompleto(precio, impuesto){ // funcion
    return precio + precio * impuesto;
}

let resultado = precioCompleto(19.90, 0.15); // llamado a funcion con parametros
console.log(resultado);