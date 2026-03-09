/* Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios.
*/

/*  Ejercicio 2: Gestión de Fila de Espera (Shift y Unshift)
Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]".
*/
function gestionfila() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("Luis");
    let salon = [alumnos.shift()];
    alert('Entró ${salon} y la fila ahora es: ${alumnos.join(", ")}.');
}

/* 
 Ejercicio 3: Reordenando Números (Lógica de Índices)
Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
Accede al número 3 y súmale 2 directamente en la operación de concatenación.
Construye la frase: "5 gatos negros duermen plácidamente".
Muestra el resultado con alert().
*/

/*
 Ejercicio 7: Limpieza de Datos (Pop y Unshift)
Instrucciones: Tienes el arreglo let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];.
Elimina el primer elemento ("Error") y el último ("Virus").
Agrega "Monitor" al inicio.
Muestra el inventario final con alert().
*/
function limpiarDatos() {
    let inventario 
}


/*
Ejercicio 8: La Matriz de Identidad Modificada
Instrucciones: Define una matriz de 3x3 llena de ceros.
JavaScript
let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

Cambia todos los ceros de la diagonal principal (superior izquierda a inferior derecha) por el número 1.
Muestra el resultado de la fila central por alert().
[0], [1][1], and [2][2]]
*/

function matrizIdentidad() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let i = 0; i < tablero.length; i++) {
        tablero[i][i] = 1;
    }

    alert(tablero[1].join(", "));
}