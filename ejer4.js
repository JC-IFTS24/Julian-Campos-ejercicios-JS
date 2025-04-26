/* +++++++++++++++++++++++++++++++++++++++++++ EJER 4 ++++++++++++++++++++++++++++++++++++++++++++++++++++++
Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes. */

function devolverResCall(callback, num1, num2){
    return callback(num1, num2)
  }
  
  const div = (num1, num2) => console.log(`La division entre ${num1} y ${num2} es de ${num1/num2}`);
  const multip = (num1, num2) => console.log(`La multiplicacion entre ${num1} y ${num2} es de ${num1*num2}`);
  
  console.log("Ejercicio 4")
  numAlea1 = Math.floor(Math.random() * 10) + 1;
  numAlea2 = Math.floor(Math.random() * 10) + 1;
  devolverResCall(div, numAlea1, numAlea2)
  devolverResCall(multip, numAlea1, numAlea2)