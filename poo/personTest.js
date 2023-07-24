let myLib = require("./person")

let pepe = new myLib.Person("Pepes", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
console.log(pepe);

pepe.printAll()

console.log(pepe.printHobbies());