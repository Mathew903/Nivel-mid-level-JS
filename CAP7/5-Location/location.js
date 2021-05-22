/* Location

Esto es la informacion que nos devuelve la localizacion.

* window.location.href  => Devuelve el href (URL) de la pagina actual.

const href = window.location.href;

alert(href);

Nos muestra la localizacion de nuestro archivo, donde esta localizado.

!#################


* window.location.hostname => Devuelve el nombre del dominio del servidor web.

const hostname = window.location.hostname;

console.log(hostname)

El nombre de nuestro dominio o del dominio

!################


* window.location.pathname => Devuelve la ruta y el nombre de archivo de la pagina actual.

desde el origen donde esta mi archivo, todo lo que viene luego del dominio es el pathname, representado en "/".

const pathName = window.location.pathname;

console.log(pathname);

!################


* window.location.protocol => Devuelve el protocolo web utilizado (http: o https:).

const protocol = window.location.protocol;

console.log(protocol);

la s es de ssl.

!###############


* window.location.assign() => Carga un nuevo documeto.

const assing = window.location.assign("https://youtube.com")

console.log(assing)

? entonces para entender:

https://youtube.com/channel/jsgdhasgd

* https es el protocolo.

? youtube.com es el hostname o el dominio o la IP.

y lo demas es el pathname.

Todo lo anterior junto es el href.

*/
