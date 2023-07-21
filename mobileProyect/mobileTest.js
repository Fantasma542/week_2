"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("S21", "Galaxy", "Samsung", "Rojo", 384);
console.log('Name:', myMobile.getName());
console.log('Trademark:', myMobile.getTrademark());
console.log('Model:', myMobile.getModel());
console.log('Color:', myMobile.getColor());
console.log('Price:', myMobile.getPrice());
myMobile.impMob();
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
myMobile.impMob();
var myMobile2 = new mobile_1.Mobile("S21", "Galaxy", "Samsung", "Rojo", 384);
var myMobile3 = new mobile_1.Mobile("S21", "Galaxy", "Samsung", "Rojo", 384);
var myMobiles = [myMobile, myMobile2, myMobile3];
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobile = myMobiles_1[_i];
    console.log("\nMobile ".concat(myMobiles.indexOf(mobile) + 1, ":"));
    mobile.impMob();
}
