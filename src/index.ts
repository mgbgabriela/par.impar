/*Par/Impar
• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)*/
let nro: number = Number(prompt("Ingrese un número"));
while (nro <= 0) {
  nro = Number(p("Ingrese otro numero positivo"));
}
if (nro % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}
