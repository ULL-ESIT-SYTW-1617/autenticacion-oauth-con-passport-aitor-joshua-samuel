#Práctica Authentication OAuth con Github

##**La práctica se ha hecho en el plugins heroku, abajo puede encontrar el enlace.**

##¿Que se hace en esta práctica?

* El servidor proveído por el plugin (sea iaas.ull.es o heroku) deberá autenticar que el lector del libro pertenece a una organización dada de GitHub. Si es el caso que pertenece podrá seguir leyendo el libro, sino será redirigido a la ruta de autenticación. **La práctica se ha hecho en el plugins heroku, abajo puede encontrar el enlace.**
* Para esta práctica se usara el paquete Passport-github para que el usuario acceda al contenido del libro haciendo login en github.

##Instrucciones

* Desplegar la raíz de directorios con ```gitbook-start -n mi-libro```
* Desplegar el plugin heroku con ```gitbook-start -d heroku -p github```
* Para el despliegue github debe rellenar el fichero userData.json con los siguientes campos:

1. La organización de acceso.
2. El token de github con los permisos necesarios.
3. La url callback de su github app.
4. El Client id de su github app.
5. El Client secret de su github app.

```json
{
    "org": "myOrg",
    "token": "myToken",
    "url": "myCallbackUrl",
    "idClient": "myClientID",
    "secretClient": "mySecretClient"
}

* Desplegar el servidor con ```node server.js```
* Hacer login con Github.


```

```
linux@user: gitbook-start -d heroku -p [github | local]
? Introduce tu token de Heroku: mi-token
? Introduzca el nombre de su app en Heroku: mi-aplicación
Aplicación creada: mi-aplicación
```


##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)


##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/crear-repositorio-en-github-aitor-joshua-samuel)
* [Repositorio de entrega del plugin heroku](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin iaas](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin heroku](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)

##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
