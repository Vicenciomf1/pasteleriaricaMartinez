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

// Closures para mejorar escalabilidad:
// Antes era un database.collection().get() y al .then() de eso lo mapeábamos
const generarTraerDocumentos = (coleccion) => {
  return async function() {
    try {
      const coleccionRef = collection(database, coleccion);  // Referencia de la colección
      const capturaConsulta = await getDocs(coleccionRef);  // Objeto como respuesta a resolver la primera promesa, también es llamado query snapshot (captura/instantánea/radiografía de la consulta)
      const documentos = capturaConsulta.docs;  // Array de documentos

      return documentos.map(documento => ({ ...documento.data(), id: documento.id }))  // Mapeamos el array para que nos den la data y el ID de tal documento
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);  // ¿Cómo evito exponer los errores, y en vez de eso guardarlos en algún log?
    }
  }
};

// Antes era un database.collection().where().get() y al .then() de eso lo mapeábamos
const generarTraerDocumentosConFiltro = (coleccion, campo, operador) => {
  return async function(valor) {
    try {
      const coleccionRef = collection(database, coleccion);  // Referencia de la colección
      const consulta = query(coleccionRef, where(campo, operador, valor));  // La única diferencia con el Read de todos los objetos es que acá filtramos con un WHERE, como la query de DQL con Where en SQL.
      const capturaConsulta = await getDocs(consulta);  // Objeto como respuesta a resolver la primera promesa

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

const generarTraerUnDocumento = (coleccion) => {
  return async function(id) {
    try {
      const documentoRef = doc(database, coleccion, id);  // Referencia del documento
      const documento = await getDoc(documentoRef); // En realidad es la captura del documento, pero como es un solo documento, no es necesario mapearlo y me facilita ponerle ese nombre
      return { ...documento.data(), id: documento.id }
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);
    }
  }
}

// Funciones:
// Para traer todos los documentos de la colección "productos".
const documentoProductos = "productos";
export const traerUnProducto = generarTraerUnDocumento(documentoProductos);
export const traerProductos = generarTraerDocumentos(documentoProductos);
export const traerPorCategoria = generarTraerDocumentosConFiltro(documentoProductos, "category", "==");
export const traerPorMayorQuePrecio = generarTraerDocumentosConFiltro(documentoProductos, "price", ">=");
export const traerPorMenorQuePrecio = generarTraerDocumentosConFiltro(documentoProductos, "price", "<=");
export const traerIgualQuePrecio = generarTraerDocumentosConFiltro(documentoProductos, "price", "==");

// ¿Cómo hago de manera escalable un filtro compuesto? (To do: Hacer muchos where dentro del query() de manera escalable, quizá usar ...spread o un mapeo de Rest Parameters)
