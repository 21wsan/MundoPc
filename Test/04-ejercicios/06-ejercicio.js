// devuelve la cantidad de numeros positivos del array

let array=[2, 5, 7, 15, -5, -100, 55]; // arreglo

function cuantosPositivos(arr){ // funcion
    let cantidad = 0; // variable que se usa como contador
    for(element of arr){ // para cada elemento en el arreglo
        if(element > 0){ // si el elemento es mayor que cero
            cantidad++; // incrementa la variable cantidad
        }
    }
    return cantidad; // retorna la cantidad
}
    let resultado = cuantosPositivos(array);
    console.log(resultado);
