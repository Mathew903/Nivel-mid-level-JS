// let peticion;

// if (window.XMLHttpRequest) {
// 	peticion = new XMLHttpRequest();
// } else {
// 	peticion = new ActiveXObject('Microsoft.XMLHTTP');
// }

// peticion.addEventListener('load', () => {
// 	let respuesta;
// 	if (peticion.status == 200) respuesta = peticion.response;
// 	else respuesta = 'No se ha encontrado el archivo o peticion';
// 	console.log(JSON.parse(respuesta));
// });

// peticion.open('GET', 'https://reqres.in/api/users?page=2');

let peticion;

if (window.XMLHttpRequest) {
	peticion = new XMLHttpRequest();
} else {
	peticion = new ActiveXObject('Microsoft.XMLHTTP');
}

peticion.addEventListener('load', () => {
	let respuesta;
	if (peticion.status == 200 || peticion.status == 201)
		respuesta = peticion.response;
	else respuesta = 'No se ha encontrado el archivo o peticion';
	console.log(JSON.parse(respuesta));
});

peticion.open('POST', 'https://reqres.in/api/users');

peticion.setRequestHeader('Content-type', 'application/json;charset=UTF8'); //encabezado, valor

peticion.send(
	JSON.stringify({
		nombre: 'morfeo',
		trabajo: 'líder',
		id: '25',
		createdAt: '2021-05-02T00: 21: 53.830Z',
	})
);
peticion.send();



/* AJAX

JavaScript asincronimous and XML(JS Asincrono y XML)

Lo que hace AJAX es, la peticion HTTP se envia, es decir, si le solicito informacion al servidor la pagina se actualiza(esto es sincrono, ya que el servidor espera una peticion para que se actualize, como reiniciar una pagina aunque es innecesario).
Pero AJAX lo que hace es tomar la respuesta del servidor, se ejecuta en paralelo, es decir, no afecta a la peticion inicial HTTP y nos termina devolviendo la data en paralelo, es decir, que nos termina devolviendo toda la data sin actualizar la pagina.

Para eso necesitamos descargar un servidor

*/

/* Objeto XMLHttpRequest


* Esto es un objeto que se crea de la siguiente forma:

const peticion = new XMLHttpRequest();

console.log(peticion);

* Con esto podemos enviar distintas peticiones, entre algunas estan: GET Y POST.

!################

* GET

Get lo que hace es abrirnos una peticion

const peticion = new XMLHttpRequest();

peticion.open('GET', 'informacion.txt');*

peticion.send();

console.log(peticion);

* Acá lo que hace es abrirnos("open" es un metodo) una peticion GET que tiene dos parametros, que primero es el metodo "GET"(o tambien puede ser "POST"), y el segundo parametro que resirve es la URL. Entonces con esto lo que hacemos es pedir una informacion.

Si queremos que se nos muestre o enviar la peticion:

".send()"; entonces con esto podemos enviar la peticion y ver el archivo.

!###################


? Pero como se puede obtener lo que hay dentro del archivo, el resultado.

Bueno esto será cuando el codigo de respuesta sea 3 o 4 y el estatus sea de 200. bueno miremos:

const peticion = new XMLHttpRequest();

peticion.addEventListener("readystatechange")

peticion.open('GET', 'informacion.txt');

peticion.send();

console.log(peticion);

* readystatechange(cuando cambie el estado), con esto verificamos cuando cambia el readyState


const peticion = new XMLHttpRequest();


peticion.addEventListener('readystatechange', () => {
	console.log(peticion.readyState);
});

peticion.open('GET', 'informacion.txt');

peticion.send();

Como vemos nos muestra el numero de cambio del 1 al 4, pero que significa: 

Bueno el 1 primer estado significa que la solicitud se creó correctamente.

La segunda que la solicitud se envió correctamente.

La tercera significa que está procesando esta petición

La cuarta que esta todo listo, que nos dio una respuesta y el resultado ya se puede utilizar.

!#####################

* Si queremos ver la informacion cuando ya este lista, se puede hacer una validacion:

const peticion = new XMLHttpRequest();


peticion.addEventListener('readystatechange', () => {
	if (peticion.readyState == 4){
    console.log(peticion.response)
    }
});

peticion.open('GET', 'informacion.txt');

peticion.send();

De esta manera vemos que al cuarto estado, nos muestra la informacion pedida.


!###################

Que pasaria si la solicitud es incorrecta:

peticion.open('GET', 'informaacion.txt'); salida: 404

Estos son los codigo de respuesta, estos errores los vamos a ver mas acerca de servidor y node.js.

Hay varios tipos de codigos de respuesta, los 2 mas comunes son, 404(no se encontró).

console.log(peticion.status);

status lo que hace es mostrarnos el estado, el estado 4 no solo significa que la solicitud llego a destino, no esto nos indica lo anterior que habiamos mencionado pero enrealidad el estado lo vemos como status.

Como vemos bien, la salida es 404 ya que no se encontro el archivo.

? Entonces tendriamos que hacer una validacion:

peticion.addEventListener('readystatechange', () => {
	if (peticion.readyState == 4 && peticion.status == 200) {
		console.log(peticion.response);
	}
});

! Pero ya de este forma no se hace más, ahora es asi:

peticion.addEventListener('load', () => {
	console.log(peticion.response);
});

Con "load" nos queda asi, validado(aunque se maneja de otra forma enrealidad):

const peticion = new XMLHttpRequest();

peticion.addEventListener('load', () => {
	let respuesta;
	if (peticion.status == 200) {
		respuesta = peticion.response;
		console.log(respuesta);
	} else {
		respuesta = 'No se ha encontrado el archivo o peticion';
		console.log(respuesta);
	}
});

peticion.open('GET', 'informacion.txt');

peticion.send();



*/

/* Objeto ActiveXObject

* AJAX no esta en todos los navegadores o versiones, entonces se utiliza esto que es muy parecido, para eso verificamos que el navegador o mas que nada internet explorer este siendo usado por el usuario

let peticion;

if (window.XMLHttpRequest) {
	 peticion = new XMLHttpRequest();
} else {
	peticion = new ActiveXObject('Microsoft.XMLHTTP');
}

De esta forma si existe el objeto(XMLHttpRequest) se crea y sino se iguala al ActiveXObject.




*/

/* Enviar peticiones POST

Las peticiones POST no se envian por URL como GET, sino por el meotdo POST justamente.

!##################


* Si solicitamos una info en GET:

let peticion;

if (window.XMLHttpRequest) {
	peticion = new XMLHttpRequest();
} else {
	peticion = new ActiveXObject('Microsoft.XMLHTTP');
}

peticion.addEventListener('load', () => {
	let respuesta;
	if (peticion.status == 200) respuesta = peticion.response;
	else respuesta = 'No se ha encontrado el archivo o peticion';
	console.log(JSON.parse(respuesta));
});

peticion.open('GET', 'https://reqres.in/api/users?page=2');

peticion.send();

!##################


* En POST es distinto:

let peticion;

if (window.XMLHttpRequest) {
	peticion = new XMLHttpRequest();
} else {
	peticion = new ActiveXObject('Microsoft.XMLHTTP');
}

peticion.addEventListener('load', () => {
	let respuesta;
	if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
	else respuesta = 'No se ha encontrado el archivo o peticion';
	console.log(JSON.parse(respuesta));
});

peticion.open('POST', 'https://reqres.in/api/users');

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8")

peticion.send(
	JSON.stringify({
		'nombre': 'morfeo',
		'trabajo': 'líder',
		'id': '25',
		'createdAt': '2021-05-02T00: 21: 53.830Z',
	})
);

! No se puede enviar como JSON sino como string, Ademas se aplica el 201 que es un coigo de verificacion valido.

* Sin embargo para ver la informacion se aplica una linea de codigo mas:

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8")

*/
