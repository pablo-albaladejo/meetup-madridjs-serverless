# Meetup MadridJS Serverless

### Desarrollando para la nube con JavaScript

Desde la aparición de los servicios en cloud, los desarrolladores tenemos acceso a recursos que nos permiten el desarrollo y despliegue de servicios con una flexibilidad y agilidad mucho mayor que en épocas anteriores, y con la posibilidad de realizar aplicaciones que los consuman de manera global. Además, con la aparición de las arquitecturas serverless, ahora tenemos la posibilidad de centrarnos en el desarrollo de nuestro modelo de dominio y dejar que sea la capa de infraestructura la que proporcione escalabilidad y robustez a nuestras aplicaciones.

En esta charla mostramos cómo desarrollar y desplegar un microservicio en un modelo serverless, utilizando dos de los componentes más comunes del stack tecnológico de AWS, como son AWS Gateway API y AWS Lambda sobre node.js, y cómo consumirlo desde una aplicación desarrollada en React.

Ponentes: Javier López y Luis Nueda

Sobre Javier:

Durante toda su carrera Javier se ha dedicado a la aplicación de la tecnología para resolver los problemas de la vida cotidiana. Ya sea desde grandes compañías como HPE y Thales, contribuyendo a construir productos en áreas como seguridad o sanidad, o en iniciativas del mundo startup como LeanXcale, ayudando a romper las limitaciones de las bases de datos convencionales.

Ahora trabaja como Lead Engineer en Aircall, construyendo el sistema de telefonía del futuro y dedica sus ratos libres a practicar esgrima y navegar por el Mediterráneo (como viejo pirata que es).

Sobre Luis:

Luis Nueda apasionado de las tecnologías Web y la formación constante. Trabaja como ingeniero de software en Aircall, enfocado en el Front. Estudió ingeniería informática y ha trabajado tres años como Frontend engineer en Orange antes de unirse a Aircall. En sus ratos libres le encanta montar en moto, cocinar comida asiática y cuando la situación lo permita , viajar.

Vídeo de la charla: https://www.youtube.com/watch?v=3Wa-cyOJQ5A&t=0

## Repositorio

El repositorio está dividido en dos carpetas:

### Back 
Donde esta todo el código relacionado con la lambda y su despliegue.

- Instalar dependencias

```
yarn install
```

- Desplegar

Antes de ejecutar el script es necesario configurar las variables de autenticación de AWS como variables de entorno.

```
yarn deploy
```

Una vez desplegados los servicios, el propio script de serverless imprimirá en pantalla las URLs bajo las que se exponen nuestras funciones. Por ejemplo:

``` 
Service Information
service: contacts
stage: dev
region: us-east-1
stack: contacts-dev
resources: 19
api keys:
  None
endpoints:
  GET - https://aw6oychf4c.execute-api.us-east-1.amazonaws.com/dev/contact
  GET - https://aw6oychf4c.execute-api.us-east-1.amazonaws.com/dev/contact/{name}
functions:
  getContacts: contacts-dev-getContacts
  findByName: contacts-dev-findByName
layers:
  None
```

En este punto tendremos que coger estas URLs y configurarlas en la parte de front, en App.URL_AWS:

```
endpoints:
GET - https://aw6oychf4c.execute-api.us-east-1.amazonaws.com/dev/contact
GET - https://aw6oychf4c.execute-api.us-east-1.amazonaws.com/dev/contact/{name}
```

App.js

```
// TODO introducir las URL de las lambdas en URL_AWS, no añadir " / " al final.
const URL_AWS = "https://aw6oychf4c.execute-api.us-east-1.amazonaws.com/dev/contact"
```

- Eliminar despliegue:

```
yarn clean-deploy
```

### Front 
Donde esta todo el código relacionado con el SDK de Aircall y el consumo de la lambda.
Una vez desplegada la lambda, recordar cambiar la url en el fichero App.js en la variable URL_AWS

- Instalar dependencias
   ```sh
    yarn install
  ```
- Levantar la aplicación
  ```sh 
    yarn start 
  ```

