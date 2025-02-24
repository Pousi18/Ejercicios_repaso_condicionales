const numeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

let numeroAcierto = numeroAleatorio();


// Función para mostrar pistas en el elemento HTML

const mensajePistaNumero = ( mensajePista : string) => {  
    const pistas = document.getElementById("mensaje-pistas");
    if (
        pistas !== null &&
        pistas !== undefined &&
        pistas instanceof HTMLDivElement
      ){
        pistas.textContent = mensajePista;
      }
    
    }


// Función para mostrar comprobación del número


const obtenerMensajePistas = (valorUsuario: number) => {    
   
   
    if (valorUsuario < numeroAcierto) {        
        mensajePistaNumero("El número es mayor")    
    } else if (valorUsuario > numeroAcierto) {        
        mensajePistaNumero("Pista el número es menor")   
    }

    }

// Función para mostrar pistas en el elemento HTML

const mensajeAciertoNumero = ( mensajeAcierto : string) => {  
    const acierto = document.getElementById("mensaje-comprobacion");
    if (
        acierto !== null &&
        acierto !== undefined &&
        acierto instanceof HTMLDivElement
      ){
        acierto.textContent = mensajeAcierto;
      }
    
    }


const compararNumeroAleatorio = (valorUsuario : number)  =>{

    switch(true){
        case (valorUsuario === numeroAcierto) :  
              mensajeAciertoNumero("Has acertado el número");
              reiniciarJuego();
              break;
        case (valorUsuario > numeroAcierto) :
            mensajePistaNumero("El número es menor")
            
            break;
        case (valorUsuario < numeroAcierto) :
            mensajePistaNumero("El número es mayor")
           
            break;
        default:
            mensajeAciertoNumero("No se que ha pasado")
            break;
    }
    
    }
    
    

const entradaNumero = () => {
    const numeroUsuario = document.getElementById("nuevo");
    if (
        numeroUsuario !== null &&
        numeroUsuario !== undefined &&
        numeroUsuario instanceof HTMLInputElement
      ){

         const valorUsuario : number = parseInt(numeroUsuario.value);
         validarNumero(valorUsuario);
         compararNumeroAleatorio(valorUsuario);
      }
}


const validarNumero = (valorUsuario : number) =>{


    if (isNaN(valorUsuario) || valorUsuario < 1 || valorUsuario > 100) {        
        
        mensajeAciertoNumero("Por favor, ingresa un número válido entre 1 y 100.");    
    } else {        
        mensajeAciertoNumero(`Has ingresado el número: ${valorUsuario}`);
}
}


document.addEventListener("DOMContentLoaded", () => {
  const botonIntroducirNumero = document.getElementById("pedir");
  if (
    botonIntroducirNumero !== null &&
    botonIntroducirNumero instanceof HTMLButtonElement
  ) {
    botonIntroducirNumero.addEventListener("click", entradaNumero);
  }
});

const reiniciarJuego = ()=>{
    numeroAcierto = numeroAleatorio();
    mensajeAciertoNumero("El juego re reiniciara")
}

