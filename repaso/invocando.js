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
var parImp1 = (0, condicionales_1.isEven)(arr1);
var parImp2 = (0, condicionales_1.isEven)(arr2);
var parImp3 = (0, condicionales_1.isEven)(arr3);
