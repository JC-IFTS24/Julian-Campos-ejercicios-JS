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
        textoP.textContent = "Se cambiaron los parrafos, yea";
    })

}