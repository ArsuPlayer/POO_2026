/*
Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
*/

function porteroDigital() {
    let edad = prompt("Ingrese su edad:")
    if (edad >= 18) {
        alert("Acceso permitido a la App");
    } else {
        alert("Acceso denegado: necesitas ser mayor de edad");
    }
}

/*Bloque 2: Gestión de Inventarios y Listas
3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
*/

function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = prompt("Ingrese un nuevo producto:");
}


/*
4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible".
*/
