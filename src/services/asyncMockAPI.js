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
            cumplir(products);
        }, 2000);
    });
};
