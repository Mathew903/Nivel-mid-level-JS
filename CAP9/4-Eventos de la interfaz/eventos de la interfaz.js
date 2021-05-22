const input = document.querySelector('.input');
const seleccionado = document.querySelector('.seleccion');

input.addEventListener('keyup', (e) => {
	let tecla = e.key;
	let nuevoContenido = `la ultima tecla presionada fue: <b>${tecla}</b>`;
	seleccionado.innerHTML = nuevoContenido;
});

/* Eventos de la interfaz

* error - ocurre cuando sucede un error durante la carga de un archivo multimedia

const img = document.querySelector('.img');

img.addEventListener('error', () => {
	console.log('ha ocurrido un error');
});

Cuando se cancela o ocurre un error o fallo, ocurre el error.

!##################


* load - ocurre cuando un objeto se ha cargado

document.body.addEventListener('load', () => {
	console.log('se ha cargado correctamente');
});

De esta manera podemos acceder al body, es unico ya que no es necesario llamarlo por clase y eso.

window.addEventListener('load', () => {
	console.log('se ha cargado correctamente');
});

De esta manera nos avisa que cargó correctamente, tambien podemos usar el window para esto.

! no es necesario colocar window por predeterminado ya es window.

addEventListener('load',()=>{
    console.log('se ha cargado correctamente')
})

!#################


* beforeunload - ocurre antes de que el documento esté a punto de descargarse.

addEventListener('beforeunload', () => {
	console.log('te estas por ir');
});

Basicamente nos daria un anuncio cuando nos estamos por ir del sitio. Cuando nos estamos por ir del sitio.

!################


* unload

Avisa cuando nos fuimos del sitio.

addEventListener('unload', () => {
	console.log('te estas por ir');
});

!################


* resize - ocurre cuando cambia el tamaño de la vista del documento.

addEventListener('resize', () => {
	console.log('Estas cambiando de vista al documento');
});

!###############


* scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento.

addEventListener('scroll', () => {
	console.log('Se ha scroleado');
});

!#############


* select - ocurre despue de que el usuario selecciona algun texto de <input> o <textarea>.

input.addEventListener('select', () => {
	console.log('se ha seleccionado');
});

? Una propiedad para ver el comienzo o el final de una palabra seleccionada, "e" para ver las propiedades, usamos la propiedad target y otra propiedad "start" o "end".

input.addEventListener('select', (e) => {
	console.log(e.target.selectionStart);
});

input.addEventListener('select', (e) => {
	console.log(e.target.selectionEnd;
});


* Ejemplo de mostrar lo que seleccionamos:

const input = document.querySelector('.input');
const seleccionado = document.querySelector('.seleccion');

input.addEventListener('select', (e) => {
	let star = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let textoCompleto = input.value;
	seleccionado.textContent = textoCompleto.substring(star, end);
});

* Otro ejemplo:

input.addEventListener('keyup', (e) => {
	let tecla = e.key;
	let nuevoContenido = `la ultima tecla presionada fue: <b>${tecla}</b>`;
	seleccionado.innerHTML = nuevoContenido;
});

Acá nos muestra la ultima tecla presionada.


? para acceder a las propiedades de cada elemento:

seleccionar el "evento" mas el parametro "evento" y mostrarlo en consola para ver todas las propiedades y practicar.

console.log(e)

y todavia hay mas eventos
*/
