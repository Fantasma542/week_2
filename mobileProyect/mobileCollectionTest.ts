import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let mobile1 = new Mobile("A12", "Galaxy", "Samsung", "Azul", 117)
let mobile2 = new Mobile("S20", "Galaxy", "Samsung", "Amarillo", 270)
let mobile3 = new Mobile ("S21", "Galaxy", "Samsung", "Rojo", 384)
let mobile4 = new Mobile ("A54", "Galaxy", "Samsung", "Negro", 415)

let mobiles = [mobile1, mobile2, mobile3, mobile4]

let mobilesCollection = new MobileCollection(mobiles)
console.log(mobilesCollection);

console.log(mobilesCollection.getMobile());

console.log(mobilesCollection.getTotalPrice());
mobilesCollection.printCollection()
