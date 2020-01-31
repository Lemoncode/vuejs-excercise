# Intro

El objetivo de este ejercicio es el que te familiarizes con VueJS.

Tomaremos como punto de entrada una aplicación que muestra una lista de miembros que pertenecen a la organización Lemoncode de Github (esto está harcodeado).

Añadiremos un _input_ que permite al usuario cambiar dicho nombre de grupo y elegir el que quiera, por ejemplo _quiero ver los miembros de la organización Microsoft_

# Ejercicio

- Arranca con el proyecto que se encuentra en la carpeta _00_start_.

- Instala las dependencias.

```bash
npm install
```

- Arranca la aplicación y comprueba que funciona correctamente..

```bash
npm start
```

- La implementación actual muestra una lista de miembros que pertenecen a la organización _lemoncode_, ésta no esta mal, pero nos gustaría que el usuario pudiera teclear el nombre de la organización que quisiera, y al pulsar el botón pudiera ver la lista de miembros de la organización que hubiera tecleado (ejemplo de organizaciones válidas: microsoft, facebook)

- Pistas:

  - Create una nueva entrada en el estado del componente `membersTable` y que por defecto valga _lemoncode_.
  - Crea un input al lado del botón de carga. Este botón mostrará la organización actual elegida (estado creado en paso anterior).
  - Enlaza el evento `onChange` para que detecte que cuando cambie, actualize el estado del campo organización.
  - Cuando el usuario pulse en el botón de cargar, en vez de pasar el valor harcodeado _lemoncode_ que pase el valor del estado.

# Para subir nota

Si quieres practicar más con VueJS, aquí tienes una lista de desafíos para añadir mejoras a esta aplicación:

- Añade la librería [vuetify](https://github.com/vuetifyjs/vuetify) y estila la aplicación (puedes mostrar los datos en una tabla o en cards...).
- Añade paginación al listado (te hará falta actualizar el UI y el cliente de api rest).
- Agrega un buscador a la tabla de forma que filtre entre los miembros.
- Si pinchas en un miembro que navegue a su página de detalle en el que podrás ver lo detalles de ese usuario (tiene que buscar la API de github para leer esos datos).
