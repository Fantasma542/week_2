"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arrays = [
    ["Casa", "Coche", "Ciudad", "Cesta"],
    ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
    ["Venezuela", "Veneno", "Voltaje"]
];
var arr1 = (0, buclesFor_1.add)(arrays[0]);
var arr2 = (0, buclesFor_1.add)(arrays[1]);
var arr3 = (0, buclesFor_1.add)(arrays[2]);
(0, condicionales_1.isEven)(arr1);
console.log(arr1);
(0, condicionales_1.isEven)(arr2);
console.log(arr2);
(0, condicionales_1.isEven)(arr3);
console.log(arr3);
