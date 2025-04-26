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