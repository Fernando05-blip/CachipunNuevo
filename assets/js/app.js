// let resultado = 20 > 10;
// console.log(resultado)

// let resultado2 = 20 < 10;
// console.log(resultado2)

// // comparaciòn estricta // usar siempre
// let resultado3 = 10 === "10";
// console.log(resultado3);

// if (resultado2 === false ) {
//     console.log("no puede ingresar")
// }

// // comparacion no es estricta
// let resultado4 = 10 == "10";
// console.log(resultado4);

// // distinto a 
// let resultado5 = 20 !== 10;
// console.log(resultado5);


// //operadores lógicos
// let resultado_log = true && true
// console.log(resultado_log)

// let resultado_log2 = false && true // y
// console.log(resultado_log2)

// let resultado_log3 = 20>11 || 30>40 // o
// console.log(resultado_log3)

// let resultado_log_neg = !true //negacion
// console.log(resultado_log_neg)


// //if (condicion) {
//     // bloque verdadero: si se cumple la condicion
// //} else {
//     // bloque falso:
// //}
// const edadUsuario = 21


// if (edadUsuario >= 18) {
//     console.log("Usted es mayor de edad")
// }else{
//     console.log("usted no puede entrar")
// }

// const edadUsuario2 = +prompt("ingrese su edad")


// if (edadUsuario2 >= 18) {
//     console.log("Usted es mayor de edad")
// }else{
//     console.log("usted no puede entrar")
// }

// const respuesta = prompt("Por favor escriba javascript")

// if (respuesta.toLowerCase === "javascript") {
//     console.log("bien, escribiò correctamente javascript")
// } else {
//     console.log("no sabes escribir javascript?")
// }

// // let palabra = respuesta.toLocaleLowerCase() // asi cambio el prompt a minusculas

// const opcionElegida = prompt(` 
//     Elija opción (ingrese número)
//     1. libros
//     2. películas
//     3. juegos
//     `) // elegir opcion en el prompt

//     switch(opcionElegida){ // evaluar opcion

//         case "1":
//             console.log("papelucho");
//             break;
//         case "2":
//             console.log("avatar")
//             break;
//         case "3":
//             console.log("NFS")
//             break;
//         default:
//             console.log("opcion no valida")
//     }

//     //ciclo FOR

//     // console.log("fuera del ciclo for inicio")

//     // for (let i = 0; i <=  10; i++) {
//     //     console.log(i)
//     // }

//     console.log("fuera del ciclo for fin")

//     // ejercicio tabla multiplicar
//     // let tabla = 6
//     // for (let i = 0; i <= 10; i++){
//     //    let resultado_t = tabla * i
//     //     console.log(tabla, 'x', i ,'=', resultado_t )
//     //     document.write(` <p>${tabla} x ${ i } = ${resultado_t}</p>`) // interpolación
//     // }

//     let i = 0    
//     const numero = 7
//     let resultado_t = numero * i
//     let contador = 0
//     let acomulador = 0
//     while (i <= 10) {
//         console.log(`${numero} x ${i} = ${i * numero} `)
//         i++
//         contador++
//         acomulador = acomulador +1 * numero
        
//     }
//     console.log("contador: ", contador)
//     console.log("acumulador: ", acomulador)

function saludar() {
    const nombre = prompt("ingresar nombre usuario")
    const nombreEnMayusculas = nombre.toUpperCase()

    console.log(`Bienvenida : ${nombreEnMayusculas}`)
}
saludar()

// usar parametros

function saludo(nombreUsuario) { // se agrego una variable como parametro en este caso nombreUsuario
    console.log(`bienvenido usuario: ${nombreUsuario.toUpperCase()}`)
}
saludo("Fernando")// aqui se agrega el valor de la variable del parametro
saludo("Francisca")
saludo("vannita")

//funcion sumar

function sumarDosNumeros(num1, num2){
    const resultadoSuma = num1 + num2
    console.log(`el resultado de la suma es ${resultadoSuma}`)
}

sumarDosNumeros(30, 20)
sumarDosNumeros(40, 30)

// utilizar un for en una funcion

function tablaDeMultiplicar(numeroTabla){
    for (let i = 0; i <= 10; i++){
               let resultado_t = numeroTabla * i
                console.log(numeroTabla, 'x', i ,'=', resultado_t )
                document.write(` <p>${numeroTabla} x ${ i } = ${resultado_t}</p>`) // interpolación
            }
}
tablaDeMultiplicar(5)