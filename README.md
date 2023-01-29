# Pictafav

# Necesidades para su inicio:
En una primera instacia, necesitaremos instalar a traves de consola tanto para el back, como para el front, todas las extesiones utilizadas, abriendo las carpetas desde su raiz utilizando el comando: $ npm i , posteriormente necesitaremos levantar ambos servidores en local, con los comandos, para el front:$ npm start,  y en el back: $ npm run dev, una vez levantado ambos servidores, necesitaremos tener instalada la aplicación de mongoDB para que guarde de manera local las imagenes. He iniciar la aplicación montandola con los puertos por defectos: 27017. Igualmente les envio los archivos .env, por si los necesitaran.

.env back:
PORT=5005
ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/PictafavBack
TOKEN_SECRET=oLiVeRio89

.env front:
REACT_APP_API_URL=http://localhost:5005/api

# Descripción del proyecto:

Es una proyecto sencillo, realizado en 2 días en cual he querido conseguir una aplicación SPA, donde poder registrarnos y almacenar de forma personalizada nuestras imagenes através de URLs.

# Decisiones Técnicas:

La primera decisión técnica fue utilizar JavaScript ayudado de su framework React Js para diseñar el front, y de un entorno de ejecución como Node.js, utilizando Expressjs. Tomé esta decisión debido a la popularidad del lenguaje, su facilidad y simpleza de utilización, y por la excelente comunidad en linea que apoya este lenguaje. 
Otras de las decisiones fue utilizar una base de datos no-relacional como MongoDB, por su simplicidad, ya que no necesitabamos una transacción compleja de documentos, y genera más estabilidad en proyectos pequeños.
Para poder mostrar algo más de lo aprendido decidí desarollar en el back, un sencillo sistema de registro, con la finalidad en un futuro, implementar un filtro a las imagenes y que cada usuario solo pudiera ver sus propias imagenes.
Para le seguridad básica de la web, utilicé bycript para la codificación de la password, y que esta se guardara directamente codificada, he instauré Json Web Token, para generar una token de autentificación individual para cada sesión de un único usuario, haciendo más sencilla la reconexión del mismo en la web, ya que el token está configurado para aguardar 5 horas en el explorador, y para posteriormente poderlo utilizar en el cribado de las imagenes mostradas.
Para el diseño estético de la web, me ayudé de la herramienta de bootstrap react, ya que hace más sencillo y ágil el manejo de css.
Para realizar los test, tanto del backend como del front end, he utilizado Jest y añadiendo testing-library para react.


# Documentación Técnica:



# Futuro:
Evidentemente el proyecto puede ser muy mejorable, desde el diseño web, añadiendole nuevas tipografías y detalles a la escena.

He dejado creada una routa en el servidor para poder eliminar una cuenta de usuario, pero por tiempo, decidí centrarme en otros aspectos de la prueba, pero simplemente habría que unirla con él front-end, para poder hacerse efectivo.

Tambien he dejado plateado un sistema en el modelo de imagenes como Owner para que una vez que estás registrado, solo tú puedas ver las imagenes que tu has subido, pero no lo he implementado para que la prueba sea más sencilla y se pueda ver con facilidad.

También se podría añadir mensajes de error y notificación para el usuario, donde poder mostrar que una sesión ha sido iniciada, o que su contraseña es muy debil,...

# Detalles añadidos de la web:

Como una verdadera SPA, me he esforzado en que los cambios de edición se vieran reflejados automáticamente sin necesidad de refrescar la web. 
He intentado aplicar los príncipios SOLID y ser muy estructurado en mi organización con unos claros patrones, pese a algunos documentos se queden sin utilizar, como los archivos css de algunos componentes, ya que no era necesario, aunque aún me queda mucho que aprender y seguir desarrollandome en este ámbito.
Creo que la implementación de nuevos diseños como las estructuras Modales para formularios da mucha más vistosidad al proyecot.


* En el apartado de test, es una tarea en la que tengo que seguir mejorando y por tiempo no he podido desarrollar más, 




