import {generarTraerUnDocumento, generarTraerDocumentos, generarTraerDocumentosConFiltroUnico, generarTraerDocumentosConFiltroCompuesto} from "./FirestoreConfigs";

// Funciones:
// Para traer todos los documentos de la colección "productos".
const documentoProductos = "productos";
export const traerUnProducto = generarTraerUnDocumento(documentoProductos);
export const traerProductos = generarTraerDocumentos(documentoProductos);
export const traerPorCategoria = generarTraerDocumentosConFiltroUnico(documentoProductos, "category", "==");
export const traerPorCategoriaYRangoDePrecios = generarTraerDocumentosConFiltroCompuesto(documentoProductos, [["category", "=="], ["price", ">="], ["price", "<="]]); // Ojo con el orden, acá el orden de parámetros es (categoría, límite bajo, límite alto), debo aprender a documentar con directivas para que el usuario sepa qué parámetros debe ingresar en qué orden, creo.
