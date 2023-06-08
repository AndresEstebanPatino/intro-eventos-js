

//document.addEventListener('click', () => {
    //Todas las instrucciones que yo ponga aquí se van a ejecutar 
    //console.log("soy un evento")
//})

let boton1 = document.getElementById('boton-1');
let contenedorTextos = document.getElementById('textos')

//Toda la lógica está dentro del evento
boton1.addEventListener('click', () => {

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Soy un párrafo generado desde javascript"
    contenedorTextos.appendChild(parrafo)

})


let boton2 = document.getElementById('boton-2')

//Toda la lógica está en una función y esa función la llamo en el evento

function mostrarTitulo(){
    let titulo = document.createElement('h1')
    titulo.innerHTML = "Hola, soy un título"
    contenedorTextos.appendChild(titulo)
}
function mostarEnConsola(){
    console.log("Soy un texto en consola")
}

boton2.addEventListener('click', () => {
    mostrarTitulo()
    mostarEnConsola()

})

let boton3 = document.getElementById('boton-poner-estilo');

function ponerEstilosBoton(){
    boton1.classList.add('boton')
}

boton3.addEventListener('click', () =>{
    ponerEstilosBoton()
})


let boton4 = document.getElementById('boton-quitar-estilo')

function quitarEstilosBoton(){
    boton1.classList.remove('boton')
}

boton4.addEventListener('click', () => {
    quitarEstilosBoton()
})

let boton5 = document.getElementById('boton-poner/quitar-estilo')

//Debería llamarse handle o toggle
function ponerQuitarEstilo(){
    if(!boton1.classList.contains('boton')){ //Con el signo de exclamación preguinto si no lo contiene
        boton1.classList.add('boton') //si no lo contiene que lo añada
    }else{
        boton1.classList.remove('boton') //Si lo contien
    }
}

boton5.addEventListener('click', () => {
    ponerQuitarEstilo()
})

//Carrito de la compra

let carritoCompra = []
let boton6 = document.getElementById('añadir-al-carrito')

console.log(carritoCompra)

function añadirAlCarrito(){
    carritoCompra.push("chocolate")
}

boton6.addEventListener('click', () => {
    añadirAlCarrito()
})



//Main: Era la rama principal, siempre debe estar estable.
//Develop o rama de desarrollo: Es la rama en donde se integran todos los cambios y se hacen las pruebas antes de enviar los cambios a la main.
//Feature: Es el tipo de rama en donde se desarrollan nuevas características o tareas del proyecto, ejemplo -> una navbar, un botón, etc.
//Release: Es la rama en donde se refactoriza el código.
//Hotfix: Es una rama de emergencia que sale de la main para solucionar un problema que no puede esperar  a otra versión del proyecto. 