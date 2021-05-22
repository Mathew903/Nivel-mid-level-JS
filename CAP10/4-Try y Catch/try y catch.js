try {
	console.log('aqui no paso nada');
} catch (error) {
	console.log('lo siento ha ocurrido un error');
}

try {
	throw {
		error: 'NombreDelError',
		info: 'Informacion del error',
	};
} catch (e) {
	console.log(e.info);
}

try {
	throw ['pedro', 'jorge'];
} catch (e) {
	console.log(e[1]);
}

/* Try...catch

try {
	asdasdasdas;
} 
catch (error) {
	console.log(error);
}

Esto me va a lanzar un error y este error que me lanza, lo paso como parametro al catch y el catch, se va a fijar que va a ser, cuando ejecutamos ambos estos eliminan los eventHandler que son para administrar los errors y se desactiva por completo en el navegador y no nos va a saltar errores sino que los vamos a manejar nosotros.

try {
	asdasdasdas;
} 

catch (error) {
	console.log(typeof error);
}

* Lo que hace "typeof" es ver el tipo de dato.

Entonces podemos decir que lo errors son objetos, entonces typeof nos define el tipo de dato que le pasamos.


try {
	asdasdasdas;
} catch (error) {
	console.log("Lo siento ocurrio un error de referencia");
}

Nosotros podemos hacer ahora lo que quisiesemos con el error.

!############

Entonces si el try no se cumple se ejecuta el catch sino se ejecuta el try normalmente

try {
	console.log("aqui no ha pasado nada");
}

catch (error) {
	console.log("lo siento ha ocurrido un error");
}

pero que pasaria si ejecutamos algo al lado, o queremos que se muestren dos cosas, bueno esto no funcionario, porque esto no controla los errores de sintaxis, sino que estan basado en lo que el programador espera.

try {
	valor();asdkhasd
	if{}
	hola
}

estos son tipos de errores de sintaxis, ademas de que no estan definidas.

catch (error) {
	console.log("lo siento ha ocurrido un error");
}

!#################


? Existen 2 tipod de catch:

* catch incondicional

es que no tiene ninguna condicion

try {
	sasdasd;
} 

catch (error) {
	console.log('lo siento ha ocurrido un error');
}


* catch condicional

Que tiene una condicion

try {
	asdasdasd;
} 

catch (error) {
	if(3 > 5){
	console.log("ha ocurrido un error")
	}
	else{
	console.log("hola")
	};
}

!#############


* Finally

Basicamente es ejecutarse "a toda costa". Aunque no haya errores, se ejecuta igual, se ejecuta pase lo que pase.

try {
	console.log('aqui no paso nada');
} 
catch (error) {
	console.log('lo siento ha ocurrido un error');
}
finally{
	console.log("me muestro igual")
}

! Aca se puede ver como el finally tiene prioridad sin importar que.

const pruebaTry = () => {
	try {
		return 1;
  }
  catch (e) {
		return 2;
  }
  
  finally {
		return 3;
	}
};

console.log(pruebaTry())

!###################


* sentencia throw

basicamente para tirrar un error

try {
	throw "hola";
}
catch (e) {
	console.log(e);
}

Ademas podemos colocar lo que sea:

try {
    throw {
      error: "NombreDelError",
      info: "Informacion del error"
    };
}
catch (e) {
	console.log(e);
}

try {
    throw {
      error: "NombreDelError",
      info: "Informacion del error"
    };
  }
  catch (e) {
		console.log(e.info); Mostrar un error en especifico
  }

! Entonces el throw lanza una excepcion y podemos pasarle el dato que querramos, lo que le pasemos va a estar como parametro en el catch, es decir, lo que coloquemos en throw va a ser igual a: (e). Y "e" va a ser igual a lo que pongas en throw.

catch (e){}; Por defecto se pone dentro del parametro "e" o "error", puede ir cualquier nombre enrealidad pero por motivos de conviccion y elegibilidad y para identificarlo mejor va "e" o "error".

*/
