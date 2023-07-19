"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var pepe = new person_1.Person('Juan', 20, 'Primo de Rivera');
console.log(pepe.printName());
console.log(pepe.yearOfBirth(2023));
pepe.setAddress('Los Angeles');
console.log(pepe);
console.log(pepe.getAddress());
