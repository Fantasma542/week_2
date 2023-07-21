import { Vector } from "./vector";

let vector = new Vector(10, 50);
let vector2 = new Vector(10, 50);
let suma = vector.add(vector2);
let subs = vector.subs(vector2);
let mult = vector.mult(vector2);
let numMult = vector.multNumber(2);
vector.print()
vector2.print()
suma.print();
subs.print();
mult.print();
numMult.print();