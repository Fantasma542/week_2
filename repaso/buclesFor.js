"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
evenNumbers(20);
function myRevert(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
    }
}
myRevert(['0', '2', '3', '5', '2']);
function isRainbow(colors) {
    for (var i = 0; i < colors.length; i++) {
        var colores = colors[i];
        if (colores.includes('Rojo') || colores.includes('Amarillo') || colores.includes('Naranja') || colores.includes('Verde') || colores.includes('Azul') || colores.includes('Azul oscuro') || colores.includes('Morado') || colores.includes('Rosa')) {
            console.log("Este color esta en el arcoiris y es el ".concat(colores));
        }
        else {
            console.log("Este color no est\u00E1 en el arcoiris y es el ".concat(colores));
        }
    }
}
// Colores que hay en el arcoiris 'Rojo' 'Naranja' ' Amarillo' 'Verde' 'Azul' 'Azul oscuro' ' Morado' 'Rosa'
isRainbow(['Rojo', 'Amarillo', 'Marron', 'Negro', 'Blanco']);
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        var word = myWords[i];
        suma += word.length;
    }
    return suma;
}
exports.add = add;
var palabras = add(["Maria", "Ana"]);
console.log(palabras);
