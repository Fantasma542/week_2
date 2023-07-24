"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
// Creamos instancias de Point para representar los vértices del triángulo
var vertex1 = new point_1.Point(1, 2);
var vertex2 = new point_1.Point(4, 6);
var vertex3 = new point_1.Point(-2, 7);
// Creamos una instancia de Triangle utilizando los vértices creados anteriormente
var myTriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
var sidesLength = myTriangle.calculateLengthSides();
console.log("Longitudes de los lados del triángulo:", sidesLength);
