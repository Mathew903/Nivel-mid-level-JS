const contenedor1 = document.querySelector('.contenedor-1');
const inputPrueba = document.querySelector('.input-prueba');
// const contenedorHijo = document.querySelector('.contenedorHijo');

inputPrueba.addEventListener('keydown', (e) => {
	console.log('apretó una tecla');
});

inputPrueba.addEventListener('keypress', (e) => {
	console.log('apretó una tecla y la soltó');
});

inputPrueba.addEventListener('keyup', (e) => {
	console.log('soltó una tecla');
});

// contenedorPadre.addEventListener('click', (e) => {
// 	alert('di click en un contenedor rojo');
// });

// contenedorHijo.addEventListener('click', (e) => {
// 	alert('di click en el contenedor azul');
// });

/* Eventos

Se puede definir como cualquier cambio que ocurre en la pagina, o cualquier cosa que suceda.

! Esto tienen que estar asociados a un codigo.

para trabajarlo:

* "eventos" / "event Handlers"

Esta es otra manera de usar eventos:

boton.onclick = () => {
	alert('hola');
}; pero no es recomendado usarlo.
 
Ya no se usa event handlers

!##########################


? ahora se usa: la "escucha de eventos" o "Event Listeners"

boton.addEventListener(); ha este objeto se le va a añadir una escucha de eventos o eventos en si.

boton.addEventListener("primero va el evento, ejemplo 'click'", y despues la funcion que vamos a ejecutar, pero aca se pueden hacer dos cosas.)

boton.addEventListener("evento", funcion)

boton.addEventListener('click', saludar);

function saludar() {
	alert('hola');
}

* como vemos lo que dice es que al apretar "click" en la funcion saludar nos dará una alerta, en este caso "hola".

todo: esto es una manera de aplicar una funcion, pero aca solo se puede utilizar la funcion normal, no la funcion flecha, pero no es una forma buena de trabar ya que los parametros no se pueden ejecutar en estos caso, pero si se usa.

!############################


? esta es la mejor manera para trabajar con parametros y funciones flecha en los event listener:

boton.addEventListener('click', () => {
	alert('pedro');
});

Esta seria una mejor manera de trabajar, utilizamos una funcion flecha y  le aplicamos una funcion como tal.

Si queremos remover un evento hacemos esto:

const boton = document.querySelector('.boton');

boton.addEventListener('click', saludar);

function saludar() {
	alert('pedro');
	boton.removeEventListener('click', saludar);
}

Esta seria la manera de remover un evento, no se puede trabajar por adentro sino que tendriamos que utilizar funciones por afuera.


*/

/* El objeto event

? Si se quiere saber en que boton se dio click utilizamos this porque es un objeto, pero this por predeterminado nos daria como resultado window y enrealidad estaria bien:

boton.addEventListener('click', () => {
	console.log(this);
});

todo: Pero no seria lo que querria, para eso utilizamos el unico parametro que se puede colocar en las funciones flecha dentro de los eventos, "event"(event, e, evt,evnt,eevent) se puede colocar de esas maneras aunque la mas usada es "e".

boton.addEventListener('click', (e) => {
	console.log(e);
});

* El objeto event nos muestra que evento se esta utilizando, si es el mouse, el teclado,etc. Cuando colocamos event nos dará en la consola mouseEvent, ya que se está utilizando el mouse.

Pero si queremos acceder al objeto que desencadenó este elemento utilizamos la propiedad "target":

boton.addEventListener('click', (e) => {
	console.log(e.target);
});

Como resultado nos daria el objeto en si, osea que el button desencadena este evento.

En resumen seria el evento que se ejecuta y sus propiedades, si no tuviesemos ese elemento no se podrian hacer muchas cosas.

Entonces funciona con ese elemento y a su vez lo ejecutamos seguido de su propiedad y asi.

*/

/* Flujo de eventos o "event flow"

A esto nos referimos al orden con el que se van a ejecutar los eventos.

Tenemos 2 tipos de orden:

* Event Bubbling (los burbujas) - Este es el que viene por defecto.

De aca tenemos event bubbling que se ejecuta del mas especifico al menos especifico.

* Event Capturing(captura)

const boton = document.querySelector('.boton');
const contenedor = document.querySelector('.contenedor');

contenedor.addEventListener('click', (e) => {
	alert('di click en un contenedor');
});

boton.addEventListener('click', (e) => {
	alert('apreté en el boton');
});

Viendo este claro ejemplo podemos decir y pensar que alerta se ejecutaria primero y todos pensarian que seria el contenedor pero no, en este caso el boton se ejecuta primero y a esto nos referimos con el flujo de eventos, es ejecutar los eventos segun el orden de especifidad.

Podemos hacer que se ejecute del más especifico al menos especifico o del menos especifico al mas especifico.

! Los hijos tienen mas especifidad que los contenedores.

Como podemos revertir el orden, bueno al final de la funcion colocamos "true".

contenedorPadre.addEventListener('click', (e) => {
	alert('di click en un contenedor rojo');
});

contenedorHijo.addEventListener('click', (e) => {
	alert('di click en el contenedor azul');
});

boton.addEventListener('click', (e) => {
	alert('apreté en el boton');
});

Hasta ahora va normal, pero fijense cundo coloco, true:

contenedorPadre.addEventListener('click',(e) => {
	alert('di click en un contenedor rojo');
},true);

Se ejecuta primero el padre, lo que hace es forzar a que se ejecute primero este evento.

Y si colocamos en ambos contenedor ",true" se ejecutaria todo al revez.

!#########################

* event.stopPropagation()

Que pasaria si nosotros quisiesemos que pare la propagacion que al apretar el boton solo me muestre el boton que aprete y nada mas. Para eso tenemos stopPropagation():

boton.addEventListener('click', (e) => {
	alert('apreté en el boton');
	e.stopPropagation();
});

Acá una vez apretado el boton ya no se ejecuta mas nada.

*/
