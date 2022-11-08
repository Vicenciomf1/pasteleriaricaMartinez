
# Pastelería Rica - Cursada Frontend Coderhouse

Hola! De los empresarios del "Apio Feliz" (Cursada de ES6+), presentamos: "Pastelería Rica", sucesora de la anterior verdulería.  

Estás cordialmente invitadx a probar de nuestros postres más ricos en este sitio generado con los conocimientos aprendidos durante la cursada de React con Hooks (2022) de CoderHouse. 

Este [sitio](https://pasteleriaricacoderhousereact.vicenciomf.tech/) permite conectarse a un BaaS llamado Firebase (relacionada a Google Cloud), y usa específicamente Firestore como base de datos no relacional orientada a documentos para almacenar las órdenes de compra, la información de contacto de usuarios y el listado de postres de la pastelería.

Muestra un listado de productos en el home, a los cuales se puede hacer clic para poder navegar hacia más detalles, una vez compras el stock máximo de algún produto en el Home, su botón se desactiva y se da un mensaje de agradecimiento, para mantener el seguimiento del carrito, se usó la Context API de React, finalmente, al confirmar la compra del carrito, se redirige hacia un link con los detalles de la compra, a los cuales se puede acceder en un futuro guardando el Link.


## Tecnologías:
 - [Firebase](https://firebase.google.com/): Como backend.
 - [React Router](https://reactrouter.com/en/main): Para el enrutado (SPA).
 - [Bootstrap](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project): Para el estilizado.

### Tecnologías en proceso de implementación (para un futuro próximo):
 - [SWR](https://swr.vercel.app/es-ES) para caching al hacer fetch (así evito hacer más consultas de las necesarias al backend).
 - [Nextjs](https://nextjs.org/), me gusta la opción de mantener el sitio con MDX.
 - [Tailwind](https://tailwindcss.com/) ó [MUI](https://mui.com/) (Mis disculpas por usar Bootstrap para esta entrega)
 - [WebPay](https://www.transbankdevelopers.cl/documentacion/como_empezar#flujo-de-integracion) y/o [MercadoPago](https://www.mercadopago.cl/developers/en/reference) para pasarela de pago (sandbox).
 - [Firebase Auth](https://firebase.google.com/docs/auth) para autenticación.
 - [CyPress](https://www.cypress.io/) para pruebas E2E.
## Correr el proyecto en local

El proyecto actualmente se encuentra [desplegado](https://pasteleriaricacoderhousereact.vicenciomf.tech/), no obstante, si es que deseas correrlo en local, puedes hacer lo siguiente:

Instalar las dependencias
```bash
  npm install
```
Correr el proyecto
```bash
  npm start
```

Luego, automáticamente será abierta una pestaña en el localhost (puerto 3000): `localhost:3000`

Muchas gracias por leer!
