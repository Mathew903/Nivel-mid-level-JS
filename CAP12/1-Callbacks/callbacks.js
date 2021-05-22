class persona {
	constructor(nombre, instagram) {
		this.nombre = nombre;
		this.instagram = instagram;
	}
}

const data = [
	['Matias', '@the_mati_15'],
	['Lucas', '@panda_98'],
	['Mario Perez', '@the_hello'],
	['Marcos', '@marcos.24'],
	['Julio', '@owo_15'],
];

const personas = [];

for (i = 0; i < data.length; i++) {
	personas[i] = new persona(data[i][0], data[i][1]); //Cada uno de los elementos en un array y en este caso creando un for, cada elemento se torna i, por eso tenemos que llamar primero a i o lo que fuere.
}

obtenerPersona = (id, cb) => {
	if (personas[id] == undefined) {
		cb('No se ha encontrado la persona');
	} else {
		cb(null, personas[id], id);
	}
};

const obtenerInstagram = (id, cb) => {
	if (personas[id].instagram == undefined) {
		cb('No se ha encontrado el instagram');
	} else {
		cb(null, personas[id].instagram);
	}
};

obtenerPersona(2, (err, persona, id) => {
	if (err) console.log(err);
	 else {
		console.log(persona.nombre);
		obtenerInstagram(id, (err, instagram) => {
			if (err) console.log(err);
				
			else console.log(instagram);
		});
	}
});

//console.log(personas[0]); Esto solo me muestra un elemento

//console.log(personas[0].nombre); Esto solo me muestra el nombre solamente

/* Callbacks

Concepto (function in function)

Basicamente es una funcion que llama a otra funcion.

function prueba(callback) {
	callback('pedro');
}

function decirNombre(nombre) {
	console.log(nombre);
}

prueba(decirNombre);

Se conectan las funciones entre si.

Prueba le está pasando como parametro "decirNombre".

* Otra manera es:

function prueba(callback) {
	callback('Juan');
}

prueba(function decirNombre(nombre) {
	console.log(nombre);
});


? Hasta hay otra manera mejor, ya que como tenemos un parametro en este ejemplo:

function prueba(callback) {
	callback('Pedro');
}

prueba(nombre => console.log(nombre));




! ctrl + h; reemplazar valores.
*/
