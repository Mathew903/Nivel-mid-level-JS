let youtubeUrl = 'https://youtube.com';

let respuesta = confirm('¿Aceptas el contrato?');

if (respuesta == true) {
	alert('has aceptado el contrato');
} else {
	alert('has cancelado el contrato');
}

/* Metodos y propiedades del objeto window

alert, print, promp, confirm, open, close, closed y stop.

* open() - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.

Esto lo que hace es abrirnos una nueva ventana, colocando un link o una variable con esa url

window.open('https://youtube.com');


otra manera de aplicar este metodo:

let youtubeUrl = 'https://youtube.com';
window.open(youtubeUrl);

!#####################


* close() - cierra la ventana actual, o la ventana en la que se llamó.

let youtubeUrl = 'https://youtube.com';
let ventana = window.open(youtubeUrl);

ventana.close()

!####################

* closed - Indica si la ventana referenciada está cerrada o no.

ventana.closed

Indica si la ventana esta cerrada o no. El resultado seria true o false.

* stop() - Detiene la carga de recursos en el contexto de navegacion actual.

window.stop

basicamente detienen la carga de una pagina.

!##################

* alert() - Muestra un cuadro de alerta con el contenido especifico y un boton aceptar.

window.alert(); es basicamente el alert(), pero es para que sepan que viene de ahi.

!##################


* print() - Abre el cuadro de dialogo imprimir para imprimir el documento actual.

print();

basicamente nos imprime(osea no de mostrar el documento sino de imprimir en si, para usar la impresora) el documento.

!##################

* prompt() - Abre un cuadro de dialogo con un mensaje que solicita al usuario un dato(string), siempre devuelve un string.

window.prompt('hola'); o propmt() tambien proviene de window.

!#################

* confirm() - Abre un cuadro de dialogo con un mensaje y dos botones: aceptar y cancelar

window.confirm('¿aceptas el contrato?');

? Esto se puede poner si aplicar el window.

let respuesta = confirm('¿Aceptas el contrato?');

if (respuesta == true) {
	alert('has aceptado el contrato');
} else {
	alert('has cancelado el contrato');
}

las respuesta o el resultado es true(aceptar) o false(cancelar).

*/
