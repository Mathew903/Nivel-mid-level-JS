/* Screen y Scroll

! screen es un objeto.

* screen - Devuelve una referencia al objeto de pantalla asociado a la ventana

const screen = window.screen;

console.log(screen);
document.write(screen);

trabaja con la ventana

document.write(screen.availHeight)

Esto es unas de las tantas propiedades que tiene screen y nos da el dato del ancho del screen.

!#################


* screenLeft - Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.

const screenLeft = window.screenLeft;
document.write(screenLeft);

Basicamente mide es la distancia que hay desde el borde de nuestro monitor al borde de nuestro navegador.

En este caso de la izquierda

!################


* screenTop - Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.

const screenTop = window.screenTop;
document.write(screenTop);

Lo mismo para este pero desde arriba.

? En resumen o para entender mejor, la distancia que hay entre los bordes superiores o horizontales de nuestro monitor hacia el navegador.

const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
document.write(`left: ${screenLeft}<br>
top: ${screenTop}`);

todo: Estas propiedades son de lectura, no de escritura(modificar o agregar valores).

!##############


* scroolX - Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.

const scrollX = window.scrollX;

alert(scrollX);

Lo mismo que y nada mas que horizontalmente, en el eje x

!##############


* scroolY - Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.

const scrollY = window.scrollY;

alert(scrollY);

Como bien dice marca los pixeles en la posicion donde este el scroolY cuando bajamos

!#############

* scroll() - desplaza la ventana a un lugar particular en el documento. (con options y posiciones).

window.scroll(x,y)

* scrollTo() - son practicamente iguales,funcionan exactamente igual.

window.scroolTo(x,y)

!#############

* minimize() - minimiza la ventana. Ya no tiene soporte, no se usa mas. window.minimize()

!#############

* resizeBy() - cambia el tamaño de la ventana actual en una cantidad especifica.

window.resizeBy(x,y); especifica el tamaño de la ventana

!#############


* resizeTo() - redimensiona dinamicamente la ventana, funciona igual a resizeBy, solo que uno es relativo y el otro no.

window.resizeTo(x,y)

!#############

* moveBy() - Mueve la ventana en una ubicacion relativa.

window.moveBy(x,y)

!############


* moveTo() - Mueve la ventana en una ubicacion absoluta.

window.moveTo(x,y)

*/

// let operacion = prompt(
// 	'1-suma  2-resta  3-multiplicacion  4-division  5-potenciacion 6-Raiz Cuadrada'
// );

// const suma = (num1, num2) => {
// 	if (operacion == '1') {
// 		num1 = prompt('ingresa el primer numero a sumar');
// 		num2 = prompt('Ingresa el segundo numero a sumar');
// 		let sumar = parseInt(num1) + parseInt(num2);
// 		alert(sumar);
// 	}
// };

// const resta = (num1, num2) => {
// 	if (operacion == '2') {
// 		num1 = prompt('ingresa el primer numero a restar');
// 		num2 = prompt('Ingresa el segundo numero a restar');
// 		let restar = parseInt(num1) - parseInt(num2);
// 		alert(restar);
// 	}
// };

// const multiplicacion = (num1, num2) => {
// 	if (operacion == '3') {
// 		num1 = prompt('ingresa el primer numero a multiplicar');
// 		num2 = prompt('Ingresa el segundo numero a multiplicar');
// 		alert(num1 * num2);
// 	}
// };

// const division = (num1, num2) => {
// 	if (operacion == '4') {
// 		num1 = prompt('ingresa el primer numero a dividir');
// 		num2 = prompt('Ingresa el segundo numero a dividir');
// 		alert(num1 / num2);
// 	}
// };

// const potenciacion = (num1, num2) => {
// 	if (operacion == '5') {
// 		num1 = prompt('ingresa el primer numero a potenciar');
// 		num2 = prompt('Ingresa el numero a potenciar');
// 		alert(num1 ** num2);
// 	}
// };

// const radicacionCuadrada = (num1) => {
// 	if (operacion == '6') {
// 		num1 = prompt('Ingresa el numero que desea averiguar su raiz cuadrada');
// 		raiz = Math.SQRT2(num1);
// 		alert(raiz);
// 	}
// };

// suma();
// resta();
// multiplicacion();
// division();
// potenciacion();
// radicacionCuadrada();
