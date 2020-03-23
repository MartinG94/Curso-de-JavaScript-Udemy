const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .402010,
      numero5 = -3;

let resultado;
// suma
resultado = numero1 + numero2;
console.log(resultado);
// resta
resultado = numero1 - numero2;
console.log(resultado);
// multiplicacion
resultado = numero1 * 2;
console.log(resultado);
//division
resultado = numero1 / numero2;
console.log(resultado);
// modulo
resultado = numero1 % numero2;
console.log(resultado);
// pi
resultado = Math.PI;
console.log(resultado);
// redondeos
resultado = Math.round(2.4) // Redondea para arriba desde .5
console.log(resultado);
resultado = Math.ceil(2.1); // Redondea hacia arriba
console.log(resultado);
resultado = Math.ceil(2.99); // Redondea hacia abajo
console.log(resultado);
// raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// numero absoluto
resultado = Math.abs(numero5);
console.log(resultado);
// potencia
resultado = Math.pow(8, 3);
console.log(resultado);
// minimo
resultado = Math.min(9,2,4,5,10,0,1,4);
console.log(resultado);
// maximo
resultado = Math.max(0,2,4,9,3,4,10);
console.log(resultado);
// random entre [0; 1)
resultado = Math.random();
console.log(resultado);