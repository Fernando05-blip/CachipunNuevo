//funcciones anomimas

const saludar = function (name = "anonimo"){ // aqui cambio el nombre de la funcion asignando  ese nombre al nombre de una variable, el name anonimo es para que tenga un valor por defecto
    console.log(`hola ${name}`) // sirve para evitar el hoisting, (evitar invocar una funcion antes de su declaracion)
}

saludar("fernando")