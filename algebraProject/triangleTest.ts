import { Point } from "./point";
import { Triangle } from "./triangle";

// Creamos instancias de Point para representar los vértices del triángulo
const vertex1 = new Point(1, 2);
const vertex2 = new Point(4, 6);
const vertex3 = new Point(-2, 7);

// Creamos una instancia de Triangle utilizando los vértices creados anteriormente
let myTriangle = new Triangle(vertex1, vertex2, vertex3);
const sidesLength = myTriangle.calculateLengthSides();
console.log("Longitudes de los lados del triángulo:", sidesLength);