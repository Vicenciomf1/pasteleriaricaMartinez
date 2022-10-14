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

// Acá genero cada filtro para ser ocupado en el resto de closures (Es un array de arrays)
const generarFiltros = (arrayDeFiltros) => arrayDeFiltros.map(filtro => where(filtro[0], filtro[1], filtro[2]));

//Acá genero las referencias
//Como usaré más el filtro compuesto, dejo primero el "filtros=false", y como gastaría más llamar a la función generarFiltros, lo hago al final en el condicional para que no lo lea si no es necesario. Pd: ¿Hace el salto sin leerlo, o lo lee igual si la condición no se cumple?
const generarReferenciaParaGetDocs = (coleccion, filtros=false, filtro=false) => {
  const coleccionRef = collection(database, coleccion);

  if (filtro) {
    console.log("El filtro es:", filtro);
    return query(coleccionRef, where(filtro[0], filtro[1], filtro[2]));
  } else if (filtros) {
    return query(coleccionRef, ...generarFiltros(filtros));
  }

  return coleccionRef;  // Si no hay ningún tipo de filtro, devuelvo la referencia de la colección
}

// Antes era un database.collection().get() y al .then() de eso lo mapeábamos
const generarTraerDocumentos = (coleccion) => {
  return async function() {
    try {
      const capturaConsulta = await getDocs(generarReferenciaParaGetDocs(coleccion));  // Objeto como respuesta a resolver la primera promesa, también es llamado query snapshot (captura/instantánea/radiografía de la consulta)
      const documentos = capturaConsulta.docs;  // Array de documentos

      return documentos.map(documento => ({ ...documento.data(), id: documento.id }))  // Mapeamos el array para que nos den la data y el ID de tal documento
    } catch (error) {
      console.log("Nos hemos encontrado con el siguiente error:", error);  // ¿Cómo evito exponer los errores, y en vez de eso guardarlos en algún log?
    }
  }
};


// Antes era un database.collection().where().get() y al .then() de eso lo mapeábamos
const generarTraerDocumentosConFiltroUnico = (coleccion, filtroIncompleto) => {
  return async function(valorDelCampo) {
    const formarFiltro = (valor) => [...filtroIncompleto, valor];

    try {
      const capturaConsulta = await getDocs(generarReferenciaParaGetDocs(coleccion, false, formarFiltro(valorDelCampo)));  // Objeto como respuesta a resolver la primera promesa

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
export const traerPorCategoria = generarTraerDocumentosConFiltroUnico(documentoProductos, ["category", "=="]);




// ¿Cómo hago de manera escalable un filtro compuesto? (To do: Hacer muchos where dentro del query() de manera escalable, quizá usar ...spread o un mapeo de Rest Parameters)
