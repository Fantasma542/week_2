let myLib = require("./contract")

let pepe = new myLib.Person("Pepe", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
let array = new myLib.Contacts()
array.persona.push(pepe)
array.printPersons();