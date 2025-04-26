/* ++++++++++++++++++++++++++++++++++++++++++++EJER1+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares. */

function arrayNumFiltraPar(numeros){
    //Esta parte es mas para cuando se ingresa numeros por consola
    var afueraDelRango = numeros.filter(function(num) {
        return num < 0 || num > 10;
      });
      if (afueraDelRango.length >= 1) {
        return "Numeros mayores a 10 no entra en el rango, rescatate"
      }
      //El filtro con return
      else{return `Los numeros filtrados son: ${numeros.filter(numerosFiltrados => numerosFiltrados % 2 === 0)}`
      
}}

console.log("Ejercicio 1");

//Pruebo correctamente
let numArray = [0,1,2,3,4,5,6,7,8,9,10]

console.log(arrayNumFiltraPar(numArray))

//Pruebo incorrectamente
let numArrayError = [0,-1,2,-3,-4,5,6,-7,8,9,134,]

console.log(arrayNumFiltraPar(numArrayError))


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

console.log(promedio(numArray))