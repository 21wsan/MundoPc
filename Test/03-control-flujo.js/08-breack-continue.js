let i = 0;
while(i < 6){
    i++;
    if(i === 2){ // si i es exactamente igual a 2
        continue;
    }

    if(i === 4){ // si i es exactamente igual a 4
        break;  // detiene la ejecucion del programa
    }
    console.log(i);
}