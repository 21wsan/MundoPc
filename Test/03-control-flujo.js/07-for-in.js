// en javascript un objeto es una coleccion de propiedades 
// relacionadas que se definen mediante pares clave: valor.
let user = {
    // propiedades (Datos)
    id: 1,
    user: "Jhon Doe",
    age: 25,
};

for(let prop in user){ // para cada propiedad prop en el objeto user
    console.log(prop, user[prop]); // imprime el nombre de la propiedad,  y user[prop] su contenido.
}