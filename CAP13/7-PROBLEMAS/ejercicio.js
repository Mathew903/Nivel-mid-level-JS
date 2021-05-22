// let peticion;

// if (window.XMLHttpRequest) {
// 	peticion = new XMLHttpRequest();
// } else {
// 	peticion = new ActiveXObject('Microsoft.XMLHTTP');
// }

// peticion.addEventListener('load', () => {
// 	let respuesta;
// 	if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
// 	else respuesta = 'No se ha encontrado el archivo o peticion';
// 	console.log(JSON.parse(respuesta));
// });

// peticion.open('POST', 'https://reqres.in/api/users');

// peticion.setRequestHeader("Content-type", "application/json;charset=UTF8")//encabezado, valor

// peticion.send(
// 	JSON.stringify({
// 		'nombre': 'morfeo',
// 		'trabajo': 'líder',
// 		'id': '25',
// 		'createdAt': '2021-05-02T00: 21: 53.830Z',
// 	})
// );

let aprobados = document.querySelector('.num-aprobados');

let desaprobados = document.querySelector('.num-desaprobados');

const getInfo = async () => {
	try {
		informacion = await axios('informacion.txt');
		aprobados.textContent = informacion.data.aprobados;
		desaprobados.textContent = informacion.data.desaprobados;
	} catch (e) {
		aprobados.textContent = 'La API falló';
		desaprobados.textContent = 'La API falló';
	}
};

document.getElementById('getInfo').addEventListener('click', getInfo);

//Importancia del try...catch. Si tuviesemos un errors, tenemos que trabajar con try y catch.

