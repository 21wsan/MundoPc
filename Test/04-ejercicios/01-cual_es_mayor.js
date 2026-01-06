function cualEsMayor(a, b){
    
    // return (a > b) ? a : b; forma simple con operador ternario.
    
    if(a > b){
        console.log("el numero mayor es: ", a);
    }else{
        console.log("el numero mayor es: ", b);
    }
}

let mayor = cualEsMayor(10, 15);

console.log(mayor);