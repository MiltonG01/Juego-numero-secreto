/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'; codigo de asignacion de texto*/

let numerosecreto = 0;
let NumIntentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
//console.log(numerosecreto);

function AsignarTextoElemento (elemtento, texto){
    let elementoHTML = document.querySelector(elemtento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (NumIntentos == 3){
        
        AsignarTextoElemento('p', 'llegaste al numero maximo de intentos');
        document.getElementById('btnIntentar').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (numeroDeUsuario === numerosecreto) {
            AsignarTextoElemento('p', `Acertaste el numero secreto en ${NumIntentos} ${(NumIntentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else{
            //no acertar numero secreto
            if (numeroDeUsuario > numerosecreto) {
                AsignarTextoElemento('p', 'El numero secreto es menor al digitado');
            } else{
                AsignarTextoElemento('p', 'El numero secreto es mayor al digitado');
            }
            NumIntentos++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //ya se sortearon los numeros 
    if(listaNumeroSorteados.length == numeroMaximo){
        AsignarTextoElemento('p', 'Ya se sortearon los numeros posibles');

    } else{

        //array de numeros sorteados
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionDeInicio() {
    AsignarTextoElemento('h1', 'Juego Del Numero Secreto');
    AsignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numerosecreto = generarNumeroSecreto();
    NumIntentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja(); 
    //indicar mensaje de inicia
    //generar numero aleatorio   
    // intento reinciar
    condicionDeInicio();
    //desabilitar  boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('btnIntentar').removeAttribute('disabled');
}

condicionDeInicio();
