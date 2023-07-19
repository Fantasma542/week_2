class Person{
    constructor(name, surname, yearOfBirth, weight, height, hobbies){
        this.nombre = name
        this.apellidos = surname
        this.anyoNacimiento = yearOfBirth
        this.edad = this.calcEdad(2023)
        this.peso = weight
        this.altura = height
        this.imc = this.calcImc()
        this.aficiones = hobbies
    }
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
        console.log(`Su Imc es - ${this.imc}`);
    }
    printHobbies(){
        return this.aficiones
    }
}

// let pepe = new Person("Pepe", "Gonzalez", 1993, 65, 1.75, ['Correr', 'Dormir', 'Nadar'])
// // console.log(pepe);

// // pepe.printAll()

// // console.log(pepe.printHobbies());

module.exports = {Person}



//////Con console
// console.log(pepe.calcImc());
// console.log(pepe.calcEdad(2023));