let myLib3 = require("./poo/contact")

let pepe = new myLib3.myLib2.Person("Pepe", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
let array = new myLib3.Contacts()
array.persona.push(pepe)
array.printPersons();