import { Person } from "./person";

let pepe = new Person('Juan', 20, 'Primo de Rivera')
console.log(pepe.printName());

console.log(pepe.yearOfBirth(2023));

pepe.setAddress('Los Angeles')
console.log(pepe);

console.log(pepe.getAddress());
