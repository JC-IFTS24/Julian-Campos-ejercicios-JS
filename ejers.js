//Array con numero aleatorios del 1 al 10 inclusive para los ejercicios.
let numArray = []
for (let i = 0; i < 10; i++) {
  numArray.push(Math.floor(Math.random() * 11) + 1);
}
console.log(`El array contiene los siguiente numeros: ${numArray}`)

/* ++++++++++++++++++++++++++++++++++++++++++++EJER 1+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares. */
function arrayNumFiltraPar(numeros){
      return `Los numeros pares son: ${numeros.filter(numerosFiltrados => numerosFiltrados % 2 === 0)}`
      
}

console.log("Ejercicio 1");
console.log(arrayNumFiltraPar(numArray))


/* +++++++++++++++++++++++++++++++++++++++++++++++++EJER 2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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


/* ++++++++++++++++++++++++++++++++++++++++++++++++ EJER 3+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento. */


/*Para cada elemnto del foreach se ejecuta un settimeout, por lo tanto
salen casi al mismo tiempo, por eso agregue el indice que multiplique por 1000
para que cada elemento espere 1 segundo desde el anterior, el unico PROBLEMA
ES QUE EL PRIMER NUM SALE SIN TIEMPO0 DE ESPERA */
function imprimirConRetr(arrayNumRetr) {
  arrayNumRetr.forEach((numero, indice) => {
    setTimeout(() => {
      console.log(numero);
    }, indice * 1000);
  });
}
console.log("Ejercicio 3");
console.log("Se imprime cada numero del array con un 1s de espera:")
console.log(imprimirConRetr(numArray))