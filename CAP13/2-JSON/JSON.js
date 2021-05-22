// const deserializado = { 'variable1': 'pedro', 'variable2': 'juan' };

// const serializado = JSON.stringify(deserializado);

// console.log(typeof serializado);


const serializado = '{ "variable1": "pedro", "variable2": "juan" }';

const deserializado = JSON.parse(serializado);

console.log(typeof deserializado);





/* Datos Estructurados (JSON)

JavaScript Object Notation(Notacion de Objeto JavaScript).

Esto funciona parecido a los Arrays asociativos, porque ejemplo:

objeto = {
	"variable1": 'pedro', (variable1 lleva comillas y esto es                     un JSON)
	"variable2": 'juan',
};

console.log(objeto.variable1);

!En el JSON, a las variables se le agrega comillas, siendo que en los arrays no se coloca, pero acá si.

Si nosotros enviamos valores de variables, en este caso utilizamos comillas en variables, porque esto sin ellas puede ocacionar varios problemas, para que despues cuando intercambiamos la info. no sea un problema y no se mesclen las variables, nombres,etc.

*/

/* Serializacion y Deserializacion

* Cuando decimos que un JSON está Serealizado significa que el JSON es una cadena de texto, que es:

Esto es un string

objeto = '{"variable1": "pedro","variable2": "juan"}'

* Esto seria un JSON Deserealizado:

Esto es un objeto

objeto = {"variable1": "pedro","variable2": "juan"}

!######################

* Metodo stringify() - Convierte un string en una cadena de texto JSON(deserealizar).

const deserealizado = { 'variable1': 'pedro', 'variable2': 'juan' };

const serealizado = JSON.stringify(deserealizado);

console.log(typeof serealizado);

Cuando veamos que tipo de dato es, como salida "string".

* Metodo parse() - Deserializa un JSON/ Convierte un string con estructura JSON a formato JSON(deserializar).

const serealizado = '{ 'variable1': 'pedro', 'variable2': 'juan' }';

const deserializado = JSON.parse(serealizado);

console.log(typeof deserializado);

Cuando enviamos datos los tenemos que enviar como string y cuando los resivimos los tenemos que resivir como string.

*/


/* JSON Polyfill

Los polyfill son funciones que simulan la funcionalidad de cualquier cosa en JS(funcion,metodo) porque el navegador no lo soporta

JSON polyfill que es una funcion que simula un JSON






*/