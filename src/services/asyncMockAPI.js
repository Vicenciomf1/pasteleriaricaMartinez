const products = [
    {
        id: 1,
        title: "Küchen del sur",
        img: "/assets/img/kuchen.webp",
        detail: "Este dulce fue hecho con mucho cariño",
        price: 5500,
        stock: 10,
        category: "Dulces",
    },
    {
        id: 2,
        title: "Torta de tres leches",
        img: "/assets/img/tortaTresLeches.webp",
        detail: "Buenarda la torta de tres leches, no te la puedes perder",
        price: 7500,
        stock: 12,
        category: "Tortas"
    }
];

export const traerProductos = () => {
    return new Promise( (cumplir, rechazar) => {
        setTimeout( () => {
            products ? cumplir(products) : rechazar(new Error("Ha ocurrido un error al intentar traer los productos de nuestro inventario"));
        }, 2000);
    });
};

export const traerUnProducto = (idRequerido) => { // Este es el GetItem() que solicitaron en la tarea, pero no quería dejarlo todo en spanglish jaja
    return new Promise( (cumplir, rechazar) => {
        setTimeout(() => {
            let unProducto = products.find( (elemento)=>elemento.id===idRequerido); //Evalúa si algún elemento del array de productos cumple con que su id sea el requerido.
            unProducto ? cumplir(unProducto) : rechazar(new Error("Este item no fue encontrado en nuestro inventario"));
        }, 2000);
    });
};