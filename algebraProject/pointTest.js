"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var pepe = new point_1.Point(-1, -2);
var pepe1 = new point_1.Point(9, 3);
console.log(pepe);
console.log(pepe.getNumX());
console.log(pepe.getNumY());
console.log(pepe.calculateQuadrant());
pepe.setNumX(6);
console.log(pepe);
pepe.setNumY(-1);
console.log(pepe);
pepe.toString();
console.log(pepe.distanceToOrigin());
var distance = pepe.calculateDistance(pepe1);
console.log(distance);
console.log(pepe.calculateQuadrant());
var newPoint = new point_1.Point(2, 5);
var pointArray = [
    new point_1.Point(8, 4),
    new point_1.Point(8, 9),
    new point_1.Point(3, 7),
    new point_1.Point(5, 9),
];
var nearestPoint = newPoint.calculateNearest(pointArray);
console.log("El punto cercano es:", nearestPoint);
