const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener('click', () => {
	let resultado, mensaje;
	try {
		prevRes = parseInt(document.getElementById('nota').value);
		if (isNaN(prevRes)) {
			throw 'Gracioso';
		}
		resultado = verificarAprobacion(8, 5, prevRes);
		mensaje = definirMensaje(prevRes);
	} catch (e) {
		resultado = '¡Has echo algo mal!';
		mensaje = 'error al intentar modificar el proceso';
	}
	abrirModal(resultado, mensaje);
});

const definirMensaje = (pr) => {
	let resultado;
	switch (pr) {
		case 1:
			resultado = 'Te sacaste la peor nota';
			break;
		case 2:
			resultado = 'Te sacaste malisima nota';
			break;
		case 3:
			resultado = 'Malisimo';
			break;
		case 4:
			resultado = 'Malardo';
			break;
		case 5:
			resultado = 'Manco';
			break;
		case 6:
			resultado = 'casi pero no';
			break;
		case 7:
			resultado = 'Justo aprobaste';
			break;
		case 8:
			resultado = 'Buena nota';
			break;
		case 9:
			resultado = 'Muy bien';
			break;
		case 10:
			resultado = 'Excelente sos un master';
			break;
		default:
			resultado = null;
	}
	return resultado;
};

const verificarAprobacion = (nota1, nota2, prevRes) => {
	promedio = (nota1 + nota2 + prevRes) / 3;
	if (promedio >= 7) {
		return "<span class='green'>APROBADO</span>";
	}
	return "<span class='red'>DESAPROBADO</span>";
};

const abrirModal = (res, msg) => {
	document.querySelector('.resultado').innerHTML = res;
	document.querySelector('.mensaje').innerHTML = 'Tu prueba: ' + msg;
	let modal = document.querySelector('.modal-background');
	modal.style.display = 'flex';
	modal.style.animation = 'aparecer 1s forwards';
};

// isNaN() es una propiedad de window.
