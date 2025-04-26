//Array con numero aleatorios del 1 al 10 inclusive para los ejercicios.
let numArray = []
for (let i = 0; i < 10; i++) {
  numArray.push(Math.floor(Math.random() * 11) + 1);
}

console.log("Ejercicio 1");
console.log(`El array contiene los siguiente numeros: ${numArray}`)

/* +++++++++++++++++++++++++++++++++++++++++++ EJER 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares. */
function arrayNumFiltraPar(numeros){
      return `Los numeros pares son: ${numeros.filter(numerosFiltrados => numerosFiltrados % 2 === 0)}`
      
}


console.log(arrayNumFiltraPar(numArray))