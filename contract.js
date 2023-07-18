class Person{
    constructor(name, surname, yearOfBirth, weight, height, hobbies){
        this.nombre = name
        this.apellidos = surname
        this.anyoNacimiento = yearOfBirth
        // this.edad = this.calcEdad(2023)
        this.peso = weight
        this.altura = height
        // this.imc = this.calcImc()
        this.aficiones = hobbies
    }
}
class Contacts{
        constructor(){
            this.persona = [];
        }
    printPersons(){
        for (let i = 0; i < this.persona.length; i++) {
            let objeto = this.persona[i];
            console.log(`
Nombre: ${objeto.nombre},
Apellidos: ${objeto.apellidos},
Año de Nacimiento: ${objeto.anyoNacimiento},
Peso: ${objeto.peso},
Altura: ${objeto.altura},
Aficiones: ${objeto.aficiones}`);
        }
}
}


module.exports = {Contacts, Person}