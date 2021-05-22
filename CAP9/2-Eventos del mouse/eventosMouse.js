/* Eventos del Mouse

* click - ocurre con un click

boton.addEventListener('click', (e) => {
	alert('apreté en el boton');
});

El tiempo predeterminado de window es de 500ms

!###############


* dblclick - ocurre con un doble click

boton.addEventListener('dblclick', (e) => {
	alert('apreté en el boton');
});

!##############


* mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.

boton.addEventListener('mouseover', (e) => {
	alert('apreté en el boton');
});

Cuando el mouse está sobre el elemento se muestra la alerta o está entrando en el elemento.

!#############


* mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.

En cambio este se ejecuta cuando salgo de un elemento:

boton.addEventListener('mouseout', (e) => {
	alert('apreté en el boton');
});



--- otros ---

* contextmenu - ocurre con un click en el boton derecho de un elemento para abrir un menu contextual.

boton.addEventListener('contextmenu', (e) => {
	alert('apreté en el boton');
});

Al apretar click derecho dentro de un elemento, se ejecuta.

!##############

* mouseenter - ocurre cuando el puntero se mueve sobre un elemento.

mas que nada es especial para internet explorer

boton.addEventListener('mouseenter', (e) => {
	alert('apreté en el boton');
});

!##############


* mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento.

boton.addEventListener('mousemove', (e) => {
	alert('apreté en el boton');
});

!#############


* mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.

boton.addEventListener('mouseleave', (e) => {
	alert('apreté en el boton');
});

La diferencia con mouseover es que este se ejecuta todo el tiempo.

!##############


* mousedown - ocurre cuando un usuario apreta un boton del mouse y lo suelta sobre un elemento.

boton.addEventListener('mousedown', (e) => {
	alert('apreté en el boton');
});

!#############


* mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento.

boton.addEventListener('mouseup', (e) => {
	alert('apreté en el boton');
});

Cuando suelto el mouse se ejecuta el evento.

*/
