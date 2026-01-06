function getbiIdX(arr, idx){
    if (idx < 0 || arr.leng <= idx){
        return "Elemento no existe";
    }

    return arr[idx];
}

let resultado = getbiIdX([1,2,3,4], 2);
console.log(resultado);