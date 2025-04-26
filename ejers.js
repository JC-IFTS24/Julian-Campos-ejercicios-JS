//Array con numero aleatorios del 1 al 10 inclusive para los ejercicios.
let numArray = []
for (let i = 0; i < 10; i++) {
  numArray.push(Math.floor(Math.random() * 11) + 1);
}
console.log(`El array contiene los siguiente numeros: ${numArray}`)

/* ++++++++++++++++++++++++++++++++++++++++++++EJER1+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares. */
function arrayNumFiltraPar(numeros){
      return `Los numeros pares son: ${numeros.filter(numerosFiltrados => numerosFiltrados % 2 === 0)}`
      
}

console.log("Ejercicio 1");
console.log(arrayNumFiltraPar(numArray))


/* +++++++++++++++++++++++++++++++++++++++++++++++++EJER2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Calcular Promedio
Escribir una función que tome un array de números y calcule el promedio. */
function promedio(arrayNumProm){
  let suma = 0
  arrayNumProm.forEach(function(numero){
  suma += numero
  })
 let numPromedio = suma/arrayNumProm.length
 return `El promedio del array que contiene: ${arrayNumProm}; es de ${numPromedio}`
}
console.log("Ejercicio 2");
console.log(promedio(numArray))