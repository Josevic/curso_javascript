//Array spread operator. Para esparcir los elementos de un arreglo:
const arr = [1, 2, 3, 4];
const suma = (a, b) => a + b;
console.log(suma(2, 2));
//Ahora vamos a utilizar los elementos del array  para utilizar esta función:
const resultado = suma(arr[0], arr[1]);
console.log(resultado);
//Podemos tomar todos los valores del array de la siguiente manera:
const resultado2 = suma(...arr);
console.log(resultado2);
//Si el array tiene mas argumentos de los que necesita la función para
//operar, la funcion sólo utilizará los elementos que necesita para
//realizar la operación de suma().
//El Array Spread Operator también se puede utilizar para clonar los elementos
//de un array en otro
const arr1 = arr;
console.log("Elementos de arr: ", arr1);
arr.push(5);
console.log("Elementos de arr: ", arr, " Elementos de arr1: ", arr1);
/**A  pesar que sólo he agregado un elemento al array arr, este igualmente
lo pasa a la copia que hemos hecho en arr1.
Este no es un efecto esperado ya que necesitamos tener una copia exacta
del array original arr que teniamos al principio antes de agragarle el 
nuevo elemento. De esta manera para tener la copia exacta del arr en arr1
debemos realizar la siguiente operación. */
let arr2 = [...arr];
arr.push(6);
console.log("Ahora elementos de arr2: ", arr2, " Y elementos de arr .", arr);
arr[5] = 7;
arr2 = arr;
console.log(
  "Cambiamos el valor del elemento 5=6 por 7",
  arr,
  " y copiamos arr en arr2: ",
  arr2
);
