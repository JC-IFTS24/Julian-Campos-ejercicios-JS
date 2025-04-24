/* Filtrar Números Pares
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
//Pruebo correctamente
let numArray = [0,1,2,3,4,5,6,7,8,9,10]

console.log(arrayNumFiltraPar(numArray))

//Pruebo incorrectamente
let numArrayError = [0,-1,2,-3,-4,5,6,-7,8,9,134,]

console.log(arrayNumFiltraPar(numArrayError))