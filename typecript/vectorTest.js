"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var vector = new vector_1.Vector(10, 50);
var vector2 = new vector_1.Vector(10, 50);
var suma = vector.add(vector2);
var subs = vector.subs(vector2);
var mult = vector.mult(vector2);
var numMult = vector.multNumber(2);
vector.print();
vector2.print();
suma.print();
subs.print();
mult.print();
numMult.print();