# book-manager-app

## Configuración inicial:
En el archivo `.env_example` tiene un ejemplo sobre la variable de entorno que se debe usar.
De igual forma les dejo un ejemplo: `VITE_JSON_SERVER_URL=http://localhost:3001`

nota: el valor de su variable de entorno debe coincidir con la bandera `--port` del siguiente script de su package.json, 
`"serverAPI": "json-server --watch db.json --port 3001"`, sin embargo, puede escribir el puerto que desee.

### `npm run dev` le permitirá correr el administrador
### `npm run serverAPI` le permitirá correr json-server

## Decripción

`book-manager-app` tiene la capacidad de gestionar libros y autores, cada gestión cuenta con su propio apartado:

### `Apartado de Libros`

#### Cuenta con el listado de libros y filtrado de busqueda para cualquier campo (`titulo, autor  o fecha de publicación`)

![Alt text](image-1.png)

#### Modal para crear

![Alt text](image-2.png)

### Modal para editar y eliminar

![Alt text](image-3.png)

### `Apartado de Autores`

#### Cuenta con el listado de autores y filtrado de busqueda para cualquier campo (`nombre, nacionalidad  o año de nacimiento`)

![Alt text](image-4.png)


#### Modal para crear

![Alt text](image-5.png)


### Modal para editar y eliminar

![Alt text](image-6.png)

## Mejoras

### Se añadió modo dark como una de las mejoras

![Alt text](image-7.png)

### Por último, aunque ya fué mencionado, se implementó un input para buscar cualquier campo disponible, mencionados anteriormente.

![Alt text](image-8.png)


# Gracias por su atención, Saludos 👋🏼