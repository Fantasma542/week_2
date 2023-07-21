"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arrays = [
    ["Casa", "Coche", "Ciudad", "Cesta"],
    ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
    ["Venezuela", "Veneno", "Voltaje"]
];
for (var i = 0; i < arrays.length; i++) {
    var array = arrays[i];
    var suma = (0, buclesFor_1.add)(array);
    (0, condicionales_1.isEven)(suma);
    console.log("Su suma es: ".concat(suma));
}
