import { Person } from "./person";

let pepe = new Person('Juasn', 20, 'Gran Vía')
console.log(pepe.printName());

console.log(pepe.yearOfBirth(2023));

pepe.setAddress('Puerta del Sol')
console.log(pepe);

console.log(pepe.getAddress());
