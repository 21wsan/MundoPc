// cuales son los numeros pares

let i = 0;

while(i < 10){ // se evalua la condicion.
    if(i % 2 == 0){
        console.log(i); // luego se ejecuta el codigo
    }
    i++; // sin esta linea se produce un loop infinito
}

console.log("Fuera del While");