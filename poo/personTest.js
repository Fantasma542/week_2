let myLib = require("./poo/person")

let pepe = new myLib.Person("Pepe", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
console.log(pepe);

pepe.printAll()

console.log(pepe.printHobbies());