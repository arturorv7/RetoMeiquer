README

link de heroku: 


Esta es una API elaborada con node.js y express la cual permite un CRUD basico en una base de datos de MySQL, la cual contiene información de los heroes del videojuego Overwatch.

Instalación

1. Instala Node,js y npm en tu computadora.
2. Clona este repositorio en local con el comando `git clone https://github.com/[USERNAME]/[REPOSITORY-NAME]`.
3. Dentro de las carpetas corre el comando `npm install`, para instalar las dependencias del proyecto.

Uso

1. Start the server by running `npm start`.
2. El servidor deberia de estar abierto en la dirección `http://localhost:3001`.
3. Con los siguientes enpoint podras interactuar con la API:

Endpoints

GET `/api/heroes`

Muestra todos los heroes que se encuentran en la base de datos.


POST `/api/heroes`

Añade un nuevo heroe a la base de datos

Example request body:

```json
{
  "id": "38",
  "nombre": "David",
  "rol": "Apoyo",
  "url": "image-url",
  "hp": "250"
}
```

DELETE `/api/heroes/:id`

Borra un heroes con el `id` en la tabla de heroes de la base de datos.

PUT `/api/heroes/:id`

Actualiza la vide de un heroe con un`id` determinado en la base de datos

Example request body:

```json
{
  "hp": 300
}
```

Configuración

Puedes configurar la conexión con la base de datos con la variable `con`

```javascript
var con = mysql.createConnection({
  host 	: 'localhost',
  user 	: 'root',
  password : '',
  database : 'Overwatch'
});
```

Para esto intercambia los valores de `host`, `user`, `password`, `database` con los valores que vayas a utilizar.

