let nombre = "Luffy";
let anime = "One Piece";
let edad = 19;

let personaje = {   /* las {} indica que es un objeto */
    nombre: "Luffy",
    anime: "One Piece", /* se conoce como par llave-valor, o propiedad */
    edad: 16,
}; 
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 18;

let llave = 'edad';
personaje[llave] = 20;

console.log(llave);