import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";

// Config de la web app de Firebase
const firebaseConfig = {
  apiKey: process.env['API_KEY_FIREBASE'],
  authDomain: "proyectoreactcoderhouse-9c5ef.firebaseapp.com",
  projectId: "proyectoreactcoderhouse-9c5ef",
  storageBucket: "proyectoreactcoderhouse-9c5ef.appspot.com",
  messagingSenderId: "496924853098",
  appId: process.env['ID_APP']
};

// Instanciamos la app y la base de datos de Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


// Closures para mejorar escalabilidad, agrega una capa de abstracción bonita que me gustó mucho.

// Antes era un database.collection().get() y al .then() de eso lo mapeábamos
export const generarTraerDocumentos = (coleccion) => { // La fábrica de funciones te pide sólo la colección de la que traerás los documentos
  return async function() {  // y te retorna una función personalizada para traer los documentos de esa colección
    try {
      //Generamos la referencia -→ sacamos una snapshot con ella -→ Con tal snapshot pedimos los documentos -→ Mapeamos el array para que nos den la data y el ID de cada documento
      const coleccionRef = collection(database, coleccion)
      const capturaConsulta = await getDocs(coleccionRef);
      const documentos = capturaConsulta.docs;  // Array de documentos

      return documentos.map(documento => ({ ...documento.data(), id: documento.id }))
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);
    }
  }
};


// Antes era un database.collection().where().get() y al .then() de eso lo mapeábamos
export const generarTraerDocumentosConFiltroUnico = (coleccion, campo, operador) => { // La fábrica de funciones te pide la colección de la que traerás los documentos, y el campo y el operador del filtro que aplicarás
  return async function(valorDelCampo) {  // La colección, el campo y el operador mencionados anteriormente se grabarán dentro de las funciones que retornemos, y estas funciones tomarán como parámetro/argumento el valor a coincidir del filtro cada vez que llamemos a esa función generada
    try {
      // Generamos la referencia -→ sacamos una snapshot con ella -→ Con tal snapshot pedimos los documentos, pero ahora agregamos tal filtro mencionado-→ Mapeamos el array para que nos den la data y el ID de cada documento
      const coleccionRef = collection(database, coleccion);
      const capturaConsulta = await getDocs(query(coleccionRef, where(campo, operador, valorDelCampo)));

      if (capturaConsulta.size === 0) {
        return [];  // Si no hay documentos, retornamos un array vacío para ahorrar el procesar las siguientes líneas de código
      }

      const documentos = capturaConsulta.docs;  // Array de documentos
      return documentos.map(documento => ({ ...documento.data(), id: documento.id }))  // Mapeamos el array para que nos den la data y el ID de tal documento
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);
    }
  }
}


//Pd: Cuando hagas un filtro compuesto complejo como un valor fijo con un rango, Firebase te pedirá indexar la base de datos, tan solo debes ir a la consola de Firebase (apretar el link que te devuelva el catch) y en la sección de Firestore, ir a la pestaña de índices y crear el índice que te pide Firebase. Si no lo haces, te dará un error de que no se puede hacer la consulta.
export const generarTraerDocumentosConFiltroCompuesto = (coleccion, filtros) => {
  // Realmente esta es la misma que con un filtro ("generarTraerDocumentosConFiltroUnico"), pero necesitaremos de muchos where dentro de la query, por lo que necesitaremos un array de objetos where(con los campos, operadores y valores de cada filtro)

  return async function(arrayDeValoresDeCampos) {

    const generarFiltrosCompletosConWhere = function(arrayDeValores){
      const filtrosIncompletos = [...filtros];

      const filtrosCompletosConWhere = filtrosIncompletos.map(([campo, operador], indiceValores) => where(campo, operador, arrayDeValores[indiceValores]));  // Es más fácil ponerle un limit acá también

      return filtrosCompletosConWhere;
    }

    try {
      const coleccionRef = collection(database, coleccion);
      const consulta = query(coleccionRef, ...generarFiltrosCompletosConWhere(arrayDeValoresDeCampos));  // Esto es lo único que cambia
      const capturaConsulta = await getDocs(consulta); // Objeto como respuesta a resolver la primera promesa

      if (capturaConsulta.size === 0) {
        return [];
      }

      const documentos = capturaConsulta.docs;  // Array de documentos
      return documentos.map(documento => ({ ...documento.data(), id: documento.id }))  // Mapeamos el array para que nos den la data y el ID de tal documento
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);
    }
  }
}


export const generarTraerUnDocumento = (coleccion) => {
  return async function(id) {
    try {
      const documentoRef = doc(database, coleccion, id);  // Referencia del documento
      const documento = await getDoc(documentoRef); // En realidad es la captura del documento (no el documento en sí), pero como es un solo documento, no es necesario mapearlo y me facilita ponerle ese nombre
      return { ...documento.data(), id: documento.id }
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);
    }
  }
}