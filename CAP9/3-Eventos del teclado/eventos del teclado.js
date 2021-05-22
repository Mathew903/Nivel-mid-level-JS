const contenedor1 = document.querySelector('.contenedor-1');
const inputPrueba = document.querySelector('.input-prueba');

inputPrueba.addEventListener('keydown', (e) => {
	console.log('apretó una tecla');
});

inputPrueba.addEventListener('keypress', (e) => {
	console.log('apretó una tecla y la soltó');
});

inputPrueba.addEventListener('keyup', (e) => {
	console.log('soltó una tecla');
});

/* Eventos del teclado

* keydown - ocurre cuando una tecla se deja de presionar

Esto es cuando se presiona una tecla dentro del elemento.

inputPrueba.addEventListener('keydown', (e) => {
	console.log('apretó una tecla);
});

!#################


* keypress - ocurre cuando una tecla se presiona

Esto cuando se presiona y se suelta dentro del elemento.

inputPrueba.addEventListener('keypress', (e) => {
	console.log('apretó una tecla y la soltó');
});

!#################


* keyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente

y acá es cuando se suelta dentro del elemento.

inputPrueba.addEventListener('keyup', (e) => {
	console.log('soltó una tecla');
});


Primero se ejecuta keydown, luego keypress y luego keyup

*/
