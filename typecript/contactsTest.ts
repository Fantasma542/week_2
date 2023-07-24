import { Person } from "./person";
import { Contacts } from "./contacts";

let pepe = new Person("Juans", 20, "Gran Via");
let array = new Contacts();
array.people.push(pepe)
array.printCalendar()

