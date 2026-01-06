// calcula los numeros impares

// usando for
for(let i = 1; i <= 10; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}


// usando while
let num = 0;
while(num <= 10){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}