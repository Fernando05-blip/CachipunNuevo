// cachipun

// defino variables

let cuantasVeces = +prompt("cuantas veces quieres jugar?")
let jugadaCpu = Math.floor(Math.random()*3)
let opcionCpu;

        
   
// Mapear las jugadas de la CPU a opciones de texto
switch (jugadaCpu) {
    case 0:
      opcionCpu = "papel";
      break;
    case 1:
      opcionCpu = "tijeras";
      break;
    case 2:
      opcionCpu = "piedra";
      break;
    default:
      alert("Opción no válida para la CPU");
  }

    

    function cachipun(){

       
        let inputUsuario = prompt(` 
            Elija opción (ingrese número)
             papel
             tijeras
             piedra
             `) 
            
             let opcionUsuario = inputUsuario
             if (opcionUsuario.toLowerCase() === "papel"){
                 opcionUsuario = 0 
             } else if (inputUsuario.toLowerCase() === "tijeras"){
                opcionUsuario = 1
             } else if (inputUsuario.toLowerCase() === "piedra"){
               opcionUsuario = 2
             }else
             alert("opcion no valida")
        
        if (opcionUsuario === jugadaCpu){
            alert("empate")

// Papel
        } else if(opcionUsuario === 0 && jugadaCpu === 1){
            alert(`tu jugada:${inputUsuario} jugada CPU: ${opcionCpu} 
                ${inputUsuario} pierde con ${opcionCpu}`)
        } else if(opcionUsuario === 0 && jugadaCpu === 2){
            alert(`tu jugada:${inputUsuario} jugada CPU:${opcionCpu} 
                ${inputUsuario} le gana a ${opcionCpu}`)
// tijeras

        } else if(opcionUsuario === 1 && jugadaCpu === 0){
            alert(`tu jugada:${inputUsuario} jugada CPU:${opcionCpu} 
                ${inputUsuario} le gana a ${opcionCpu}`)
        } else if(opcionUsuario === 1 && jugadaCpu === 2){
            alert(`tu jugada:${inputUsuario} jugada CPU:${opcionCpu} 
                ${inputUsuario} pierde con ${opcionCpu}`)
//piedra
        } else if(opcionUsuario === 2 && jugadaCpu === 1){
            alert(`tu jugada:${inputUsuario} jugada CPU:${opcionCpu} 
                ${inputUsuario} le gana a ${opcionCpu}`)
        } else if(opcionUsuario === 2 && jugadaCpu === 0){
            alert(`tu jugada:${inputUsuario} jugada CPU:${opcionCpu} 
                ${inputUsuario} pierde ${opcionCpu}`)

        }else
        alert("opcion no valida")
        let resultadoJuego = `tu jugada: ${inputUsuario} vs jugada CPU: ${opcionCpu}`
        console.log(resultadoJuego)
    }

    
    for (let i = 0; i < cuantasVeces; i++) {
        cachipun();
        console.log(`Juego ${i + 1} de ${cuantasVeces}`);
    }

   // console.log(opcionUsuario)   
   // console.log(inputUsuario, jugadaCpu)