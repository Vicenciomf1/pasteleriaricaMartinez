import {
  generarTraerUnDocumento,
  generarTraerDocumentos,
  generarTraerDocumentosConFiltroUnico,
  generarTraerDocumentosConFiltroCompuesto,
  generarCrearDocumento
} from "./FirestoreConfigs";

// Funciones:
// Para traer todos los documentos de la colección "productos".
const documentoProductos = "productos";
export const traerUnProducto = generarTraerUnDocumento(documentoProductos);
export const traerProductos = generarTraerDocumentos(documentoProductos);
export const traerProductoPorCategoria = generarTraerDocumentosConFiltroUnico(documentoProductos, "category", "==");
export const traerProductoPorCategoriaYRangoDePrecios = generarTraerDocumentosConFiltroCompuesto(documentoProductos, [["category", "=="], ["price", ">="], ["price", "<="]]); // Ojo con el orden, acá el orden de parámetros es (categoría, límite bajo, límite alto).


//Para la colección "ordenes":
const documentoOrdenes = "orders";
export const traerUnaOrden = generarTraerUnDocumento(documentoOrdenes);
export const concretarOrdenDeCompra = generarCrearDocumento(documentoOrdenes);




