"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
// Creamos instancias de Point para representar los vértices del triángulo
var vertice1 = new point_1.Point(1, 2);
var vertice2 = new point_1.Point(4, 6);
var vertice3 = new point_1.Point(-2, 7);
// Creamos una instancia de Triangle utilizando los vértices creados anteriormente
var myTriangle = new triangle_1.Triangle(vertice1, vertice2, vertice3);
var longitudes = myTriangle.calculateLengthSides();
console.log(longitudes);
