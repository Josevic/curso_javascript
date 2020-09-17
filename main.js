/**Object Spread Operator
 * Para generar las copias de un objet en oro y así
 * no mutar los objetos declarados previamente.
 *
 */
const obj = {
  a: 1,
  b: 2,
};

const obj1 = {
  ...obj,
};

obj1["c"] = 3;
console.log(
  "El valor del objeto obj: ",
  obj,
  "  Y el valor de obj1 es: ",
  obj1
);

/**Podemos ademas agregarles a un objeto una copia
 * de un objeto existente de tal manera que
 * contenga las misma propiedades.
 */

const obj3 = {
  x: 1,
  z: 2,
};
const obj4 = {
  data: {
    ...obj3,
  },
};
//A el objeto obj4 le agregamos otra propiedad:
obj4["y"] = 3;
console.log(
  "El objeto obj3 tiene las propiedades : ",
  obj3,
  " Y el objeto obj4 tiene las propiedades :",
  obj4
);
const objeto = obj4.data;
console.log(obj4.data.x);
console.log(obj4.y);
console.log(objeto.z);
