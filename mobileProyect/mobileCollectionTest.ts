import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobile1 = new Mobile("SA", "SS", "Soy", "Rojo", 5)
let mobile2 = new Mobile("Desfe", "No", "Si", "Azul", 50)
let mobile3 = new Mobile("Donde", "El", "Po", "Marro", 30)
let mobile4 = new Mobile("Pues", "Al", "Nre", "Negro", 20)

let mobiles = [mobile1, mobile2, mobile3, mobile4]

let mobilesCollection = new MobileCollection(mobiles)
// console.log(mobilesCollection);

// console.log(mobilesCollection.getMobile());

// console.log(mobilesCollection.getTotalPrice());
mobilesCollection.printCollection()
