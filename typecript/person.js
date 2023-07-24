"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    /////metodos
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (adress) {
        this.address = adress;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
////log  2222
// let pepe = new Person('Juan', 20, 'Primo de Rivera')
// console.log(pepe.printName());
// console.log(pepe.yearOfBirth(2023));
// pepe.setAddress('Los Angeles')
// console.log(pepe);
// console.log(pepe.getAddress());
