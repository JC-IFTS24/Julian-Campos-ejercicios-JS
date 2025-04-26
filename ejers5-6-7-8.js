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


/* ++++++++++++++++++++++++++++++++++EJER 7 y EJER 8 +++++++++++++++++++++++++++++++++++++++++++ 
Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer click en el
botón, agregar un nuevo elemento a la lista con un número que se
incremente automáticamente. Eliminar Elementos de una Lista
Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista. */

let contadorList = 1
function agregarLista(){
    
    const lista = document.getElementById("listaDes");

    const nuevoItem = document.createElement("li");
    const nuevoBoton = document.createElement("button")

    nuevoItem.textContent = contadorList;
    nuevoBoton.textContent = "Eliminar";

    nuevoItem.appendChild(nuevoBoton);
    
    nuevoBoton.addEventListener("click", () => {
        // eliminamos el <li> completo
        lista.removeChild(nuevoItem);
    });
    
    contadorList++
    lista.appendChild(nuevoItem);
}


