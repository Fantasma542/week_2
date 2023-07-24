import { Point } from "./point";

let pepe = new Point(-1, -2)
let pepe1 = new Point(9, 3)


console.log(pepe);

console.log(pepe.getNumX());
console.log(pepe.getNumY());
console.log(pepe.calculateQuadrant());

pepe.setNumX(6)
console.log(pepe);
pepe.setNumY(8)
console.log(pepe);


pepe.toString()
console.log(pepe.distanceToOrigin());
const distance = pepe.calculateDistance(pepe1);
console.log(distance);
console.log(pepe.calculateQuadrant());


let newPoint = new Point(2, 5)
let pointArray = [
    new Point(8, 4),
    new Point(8, 9),
    new Point(3, 7),
    new Point(5, 9),]

    let nearestPoint = newPoint.calculateNearest(pointArray);
    console.log("El punto más cercano es:", nearestPoint);


