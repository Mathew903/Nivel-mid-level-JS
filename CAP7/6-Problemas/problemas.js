let href = window.location.href;
let protocolo = window.location.protocol;
let dominio = window.location.hostname;
let pathName = window.location.pathname;

document.write(`<b>El nombre de la url es:</b> ${href}<br><br>
<b>El protocolo es:</b> ${protocolo}<br><br>
<b>El dominio es:</b> ${dominio}<br><br>
<b>El pathname es:</b> ${pathName}`);

// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`Tiene una resolucion de:
//  alto: ${alto}  ancho: ${ancho}
//  ¿Deseas comprar?`);

// if (comprar) {
// 	alert('compra exitosa');
// } else {
// 	alert('compra cancelada');
// }
