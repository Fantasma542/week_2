import { Point } from "./point";
import { Triangle } from "./triangle";

let vertice1 = new Point(1, 2);
let vertice2 = new Point(4, 6);
let vertice3 = new Point(-2, 7);

let myTriangle = new Triangle(vertice1, vertice2, vertice3);
let longitudes = myTriangle.calculateLengthSides();
console.log(longitudes);