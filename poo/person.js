"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
<<<<<<< HEAD:poo/person.js
    ///////metodo
    calcImc(){
    return this.peso / (this.altura * this.altura)
    }
    calcEdad(age){
        return age - this.anyoNacimiento
    }
    printAll(){
        console.log(`Nombre - ${this.nombre}`);
        console.log(`Apellidos - ${this.apellidos}`);
        console.log(`Año de Nacimiento - ${this.anyoNacimiento}`);
        console.log(`Edad - ${this.edad}`);
        console.log(`Peso - ${this.peso}`);
        console.log(`Altura - ${this.altura}`);
        console.log(`Su IMC es - ${this.imc}`);
    }
    printHobbies(){
        return this.aficiones
    }
}

let pepe = new Person("Pepe", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
=======
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
>>>>>>> dia2:typecript/person.js
// console.log(pepe);
// console.log(pepe.getAddress());
