﻿# Pictafav

# Aclaraciones:

Debido al corto periodo de tiempo estimado para la realización de la prueba ya que tenía un viaje programado, he decido añadir al proyecto un backend de ejemplo que no está vinculado al frontend con la instalación de laravel 10, composer, php, phpMyAdmin, Pest(para testing) y utilizando laravel bleezer para crear las rutas y en un futuro poder linkearlas al front. He añadido un componenete de NewDescription para mostrar la utilización del hook de UseState en la page "ImageDetailsPage.jsx" para React. He utilizado github para el control de versiónes y ramas para mi proyecto. Siento mucho no poder demostrar toda mi capizadad ya que no he podido desarrollarlo en profundida.


# Descripción del proyecto:

Es una proyecto sencillo, en cual he querido conseguir una aplicación SPA, donde poder registrarnos y almacenar de forma personalizada nuestras imagenes através de URLs.

# Necesidades para su inicio:
En una primera instacia, necesitaremos clonar el repositio desde la web: https://github.com/oliverio89/Pictafav , instalar a traves de consola tanto para el back, como para el front, todas las extesiones utilizadas, abriendo las carpetas desde su raiz utilizando el comando: $ npm i , posteriormente necesitaremos levantar ambos servidores en local, con los comandos, para el front:$ npm start,  y en el back: $ npm run dev, una vez levantado ambos servidores, necesitaremos tener instalada la aplicación de mongoDB para que guarde de manera local las imagenes, he iniciar la aplicación montándola con los puertos por defectos: 27017. Igualmente les envio los archivos .env, por si los necesitaran.



# Decisiones Técnicas:

La primera decisión técnica fue utilizar JavaScript ayudado de su framework React Js para diseñar el front, y de un entorno de ejecución como Node.js, utilizando Expressjs. Tomé esta decisión debido a la popularidad del lenguaje, su facilidad y simpleza de utilización, y por la excelente comunidad en linea que apoya este lenguaje. 

Otras de las decisiones fue utilizar una base de datos no-relacional como MongoDB, por su simplicidad, ya que no necesitabamos una transacción compleja de documentos, y genera más estabilidad en proyectos pequeños.
Para poder mostrar algo más de lo aprendido decidí desarollar en el back, un sencillo sistema de registro, con la finalidad en un futuro, implementar un filtro a las imagenes y que cada usuario solo pudiera ver sus propias imagenes.

Para le seguridad básica de la web, utilicé bycript para la codificación de la password, y que esta se guardara directamente codificada, he instauré Json Web Token, para generar una token de autentificación individual para cada sesión de un único usuario, haciendo más sencilla la reconexión del mismo en la web, ya que el token está configurado para aguardar 5 horas en el explorador, y para posteriormente poderlo utilizar en el cribado de las imagenes mostradas.

Para el diseño estético de la web, me ayudé de la herramienta de bootstrap react, ya que hace más sencillo y ágil el manejo de css, añadiendo el plus, de hacer reactiva la web a distintos tamaños de dispositivo.


Para realizar los test he utilizado Jest y añadiendo testing-library para react, en el back, aún hay controversía con los test para node, ya que Jest no funciona de manera estable, y con Node js, versión 18 incluyeron un testing propio pero aún no he podido desarrollarlo de manera eficiente.

# Documentación Técnica:

https://www.mongodb.com/es
https://nodejs.org/es/
https://expressjs.com/en/5x/api.html
https://create-react-app.dev/
https://react-bootstrap.github.io/


# Futuro:
Evidentemente el proyecto puede ser muy mejorable, desde el diseño web, añadiendole nuevas tipografías y detalles a la escena.

He dejado creada una routa en el servidor para poder eliminar una cuenta de usuario, pero por tiempo, decidí centrarme en otros aspectos de la prueba, pero simplemente habría que unirla con él front-end, para poder hacerse efectivo.

También se podría añadir mensajes de error y notificación para el usuario, donde poder mostrar que una sesión ha sido iniciada, o que su contraseña es muy debil,...

# Detalles añadidos de la web:

Como una verdadera SPA, me he esforzado en que los cambios de edición se vieran reflejados automáticamente sin necesidad de refrescar la web. 
He intentado aplicar los príncipios SOLID y ser muy estructurado en mi organización con unos claros patrones, pese a algunos documentos se queden sin utilizar, como los archivos css de algunos componentes, ya que no era necesario, aunque aún me queda mucho que aprender y seguir desarrollandome en este ámbito.
Creo que la implementación de nuevos diseños como las estructuras Modales para formularios da mucha más vistosidad al proyecot.
La creación de un servicio de auth añade valor a la Web, haciendo que cada usuario pueda ver solo sus propias imagenes almacenadas.


* En el apartado de test, es una tarea en la que tengo que seguir mejorando y por tiempo no he podido desarrollar más.




