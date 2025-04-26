//Array con numero aleatorios del 1 al 10 inclusive para los ejercicios.
let numArray = []
for (let i = 0; i < 10; i++) {
  numArray.push(Math.floor(Math.random() * 11) + 1);
}

console.log("Ejercicio 2");

/* +++++++++++++++++++++++++++++++++++++++++++++++ EJER 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  
  
  console.log(promedio(numArray))