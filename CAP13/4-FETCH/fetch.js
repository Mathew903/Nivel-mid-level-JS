


const imagen = document.querySelector('.imagen');

fetch('2555.jpg')
	.then((res) => res.blob())
	.then((img) => (imagen.src = URL.createObjectURL(img)));

/* FETCH

Es una forma de trabajar que tenemos del objeto XMLHttpRequest, ActiveXobjet y entre otros. Fecth es un objeto mas que es el reemplzado de XMl..

Cuando trabajamos con fetch siempre nos devuelve una promesa encapsulada, porque no podemos acceder a los datos cuando los obtengamos, pero tenemos varios metodos para poder convertir ese resultado en algo valido.


* peticion = fetch('https://reqres.in/api/unknown/2');

Por defecto fetch tiene el metodo "GET".

Esto es una peticion asincrona y entonces podemos ver:
!Pero los datos estan encapsulados

peticion.then((res) => console.log(res));

!################

* text()- Nos devuelve los datos en el formato pedido, lo obtenemos como texto.

fetch('https://reqres.in/api/unknown/2')
    .then(res => res.text())
    .then(res => console.log(res));

De esta forma, simplificando lo anterior de AJAX, solo utilizamos 3 lineas de codigo y podemos ver los datos.


* JSON()- Si queremos que nos devuelve en forma de JSON, de objeto.

fetch('https://reqres.in/api/unknown/2')
    .then(res => res.json())
    .then(res => console.log(res));

Con esto obtenemos un json ya desencapsulado.

!####################


* Si queremos hacer una peticion POST, se hace lo siguiente:

Ahora tiene 2 parametros

fetch('https://reqres.in/api/users',{

})
	.then((res) => res.json())
	.then((res) => console.log(res));

fetch('https://reqres.in/api/users', {
	method: 'POST', //Metodo
	body: JSON.stringify({
		nombre: 'Lucas',
		apellido: 'Dalto',
	}), //El contenido que querramos pasar
	headers: { 'Content-type': 'application/json' },
})
	.then((res) => res.json())
	.then((res) => console.log(res));

* si es simple el codigo:

fetch('https://reqres.in/api/users', {
	method: 'POST',
	body: `{"nombre": "Lucas","apellido": "Dalto"}`,
	headers: { 'Content-type': 'application/json' },
})
	.then((res) => res.json())
	.then((res) => console.log(res));

!####################

todo: Esto es para mas presentable

let headers = {
    method: 'POST',
    body: `{"nombre": "Lucas","apellido": "Dalto"}`, 
    headers: { 'Content-type': 'application/json' },
}

fetch('https://reqres.in/api/users',headers).then((res) => res.json())
  .then((res) => console.log(res));

*/

/* let headers = {
    method: 'POST', (Metodo)
    body: `{"nombre": "Lucas","apellido": "Dalto"}`, (El contenido que querramos pasar).
    headers: { 'Content-type'(cabezera): 'application/json'(valor de la cabezera) }

    ! Tipo de headers, existen muchos dependiendo de la info.(contenido) que enviemos al servidor
}
*/

/* Utilizar blob()

const imagen = document.querySelector('.imagen');

fetch('2555.jpg')
	.then((res) => res.blob())
	.then((img) => (imagen.src = URL.createObjectURL(img)));

Lo que estamos haciendo aca es acceder y leer una imagen, y ademas la mostramos en el navegador

todo: Acá lo que hacemos es acceder al objeto "URL", que es una API nativa, que tiene un metodo(createObjectURL) que lo que hace es crearnos una URL para que el objeto, que en este caso es una img, lo podamos visualizar.

? Basicamente y explicando mas a fondo, dentro de "src" podriamos escribir la imagen y la mostraria pero no es lo mismo que con el paso anterior. Porque lo que hacemos es crear una ruta temporal(mediante un tipo de dato blob) en donde va a almacenarse la img, pero esta se almacena durante la peticion, cuando actualizamos cambia la URL. Debido a que crea una URL donde almacena lo que le pasemos para mostrar y esa URL va cambiando.


*/
