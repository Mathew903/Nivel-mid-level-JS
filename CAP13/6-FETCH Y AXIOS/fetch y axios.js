

/* Fetch y Axios con await y async

okey significa sobre el estatus, si el estatus esta bien, la peticion se resuelve

const getName = () => {
	fetch('informacion.txt')
		.then((res) => {
			if (res.ok) Promise.resolve(res);
			else Promise.reject(res);
		})
		.then((res) => console.log(res))
		.catch((e) => {
			console.log(e);
		});
};

getName();

* Cuando hacemos una peticion en este caso, que es una promesa, pero apesar de que este todo bien, como es una promesa se ejecuta antes, ya que la funcion se ejecuta antes de que la llamamemos y para eso usamos async y await.

const getName = async () => {
	let peticion = await fetch('informacion.txt');
	let resultado = await peticion.json();
	console.log(resultado);
};

getName();

De esta manera nos muestra la data.

then(res=>res) lo que hacemos aca es reemplazarlo y seria igual a: peticion = await fetch("data");

*/

/* Obtener nombre mediante un btn

const getName = async () => {
	let peticion = await fetch('informacion.txt');
	let resultado = await peticion.json();
	console.log(resultado);
};

getName();

const btn = document
	.getElementById('nombre')
	.addEventListener('click', getName);

*/

/* fetch (valor encapsulado)

const getName = async () => {
	let peticion = await fetch('informacion.txt');
	let resultado = await peticion.json();
	let div = document.createElement('DIV');
	div.classList.add('nombre');
	div.innerHTML = resultado.nombre;
	document.body.appendChild(div);
};

const getAge = async () => {
	let peticion = await fetch('informacion.txt');
	let resultado = await peticion.json();
	let div = document.createElement('DIV');
	div.classList.add('edad');
	div.innerHTML = resultado.edad;
	document.body.appendChild(div);
};

const nombre = document
	.getElementById('getName')
	.addEventListener('click', getName);

const edad = document
    .getElementById('getAge')
    .addEventListener('click', getAge);

*/


// Axios - datos ya en JSON

const getName = async () => {
	let resultado = await axios('informacion.txt');
	let div = document.createElement('DIV');
	div.classList.add('nombre');
	div.innerHTML = resultado.data.nombre;
	document.body.appendChild(div);
};

const getAge = async () => {
	let resultado = await axios('informacion.txt');
	let div = document.createElement('DIV');
	div.classList.add('edad');
	div.innerHTML = resultado.data.edad;
	document.body.appendChild(div);
};

const nombre = document
	.getElementById('getName')
	.addEventListener('click', getName);

const edad = document
	.getElementById('getAge')
	.addEventListener('click', getAge);


