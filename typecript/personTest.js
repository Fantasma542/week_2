"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var pepe = new person_1.Person('Juasn', 20, 'Gran Vía');
console.log(pepe.printName());
console.log(pepe.yearOfBirth(2023));
pepe.setAddress('Puerta del Sol');
console.log(pepe);
console.log(pepe.getAddress());
