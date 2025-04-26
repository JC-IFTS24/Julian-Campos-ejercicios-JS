/* ++++++++++++++++++++++++++++++++++++++EJER 5 ++++++++++++++++++++++++++++++++++++++
Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado
en un elemento div. Actualizar el texto del div al hacer click. */

function contadorMod(seleccion){
    let contador = parseInt(document.getElementById("contador").textContent);
    if (seleccion === "incrementar" ){
        contador++
    }
    else if (seleccion === "decrementar"){
        contador--
    }
    document.getElementById("contador").textContent = contador;
}

/* +++++++++++++++++++++++++++++++++++++ EJER 6 +++++++++++++++++++++++++++++++++++++
Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer
click en un botón. */

function cambiarP(){
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(textoP => {
        if (textoP.textContent === "Se cambiaron los parrafos, yea"){
            textoP.textContent = "Se volvieron a cambiar los parrafos"
        }
        else textoP.textContent = "Se cambiaron los parrafos, yea";
    })

}


/* ++++++++++++++++++++++++++++++++++EJER 7 +++++++++++++++++++++++++++++++++++++++++++ 
Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer click en el
botón, agregar un nuevo elemento a la lista con un número que se
incremente automáticamente. */
let contadorList = 1
function agregarLista(){
    
    const lista = document.getElementById("listaDes");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = contadorList;
    contadorList++
    lista.appendChild(nuevoItem);
}