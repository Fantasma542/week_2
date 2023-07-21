import { Mobile } from "./mobile";

let myMobile = new Mobile ("S21", "Galaxy", "Samsung", "Rojo", 384)

console.log('Name:', myMobile.getName());
console.log('Trademark:', myMobile.getTrademark());
console.log('Model:', myMobile.getModel());
console.log('Color:', myMobile.getColor());
console.log('Price:', myMobile.getPrice());
myMobile.impMob()

myMobile.setName('A34');
myMobile.setTrademark('Galaxy');
myMobile.setModel('Samsung');
myMobile.setColor('Amarillo');
myMobile.setPrice(260);

console.log('New name:', myMobile.getName());
console.log('New Trademark:', myMobile.getTrademark());
console.log('New Model:', myMobile.getModel());
console.log('New Color:', myMobile.getColor());
console.log('New Price:', myMobile.getPrice());
myMobile.impMob()



let myMobile2 = new Mobile ("S21", "Galaxy", "Samsung", "Rojo", 384)
let myMobile3 = new Mobile ("S21", "Galaxy", "Samsung", "Rojo", 384)
let myMobiles = [myMobile, myMobile2, myMobile3]

for (const mobile of myMobiles) {
    console.log(`\nMobile ${myMobiles.indexOf(mobile) + 1}:`);
    mobile.impMob();
  }