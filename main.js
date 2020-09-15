let num1 = 20;
let num2 = 3;
name = "Chelsey";

function contador() {
  let cont = 0;
  if ((name = "Chelsey")) {
    cont = cont + 1;
  } else {
    cont = cont + 0;
  }
  return name + " anotó otro " + num1 * num2 + " y un: " + cont;
}
console.log(contador());
