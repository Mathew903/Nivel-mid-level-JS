

axios.post('https://reqres.in/api/users', {
    method:"post",
    data: {"nombre":"lucas"}
})
    .then((res) => console.log(res));




/* Libreria Axios

* Esto es un reemplazo de fetch.

Es una libreria (no nativa) y está basado en promesas pero utiliza la tecnologia XMLHttpRequest por eso es una libreria.

axios('informacion.txt').then((res) => console.log(res));

y con esto nos ahorramos otra linea de codigo, porque con axios la info. no está encapsulada.

!###############


* Si queremos acceder a la data:

axios('informacion.txt').then((res) => console.log(res.data));

Por defecto el metodo es GET.

El header lo coloca de manera automatica.

!##############


* Si queremos que sea GET de manera obligatoria colocamos GET.

axios.get('informacion.txt').then((res) => console.log(res.data));

Aunque no es necesario colocar get, ya es viene predeterminado como metodo.

!#############


* Si queremos POST, colocamos post como metodo.

axios.post('informacion.txt').then((res) => console.log(res));

Pero si queremos enviar una data:

axios.post('https://reqres.in/api/users', {
    "nombre": "matias",
    "edad": "15"
})
    .then(res => console.log(res));

Con esto enviamos una peticion en POST.

!#############


* Pero hay otra forma mas, trabajar directo de la conf.

axios.post('https://reqres.in/api/users', {
    method:"post",
    data: {"nombre":"lucas"}
})
    .then((res) => console.log(res));

Y en la data(cuando trabajamos con JSON, a diferencia de fetch), no hace falta serealizar el objeto, ya que si hacemos esto nos devolveria un string y lo que tenemos ya es un JSON.


? Pero es mejor para enviar la data que queremos y no como configuracion

!#############

Si no utilizamos post, el segundo parametro seria una config. pero si lo usamos seria la data que vamos a enviar.


*/
