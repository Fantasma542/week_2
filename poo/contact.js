let myLib2 = require("./person")
class Contacts{
        constructor(){
            this.persona = [];
        }
    printPersons(){
        for (let i = 0; i < this.persona.length; i++) {
            let objeto = this.persona[i];
            console.log(`
Nombres: ${objeto.nombre},
Apellidos: ${objeto.apellidos},
Año de Nacimiento: ${objeto.anyoNacimiento},
Peso: ${objeto.peso},
Altura: ${objeto.altura},
Aficiones: ${objeto.aficiones}`);
        }
}
}


module.exports = {Contacts, myLib2}