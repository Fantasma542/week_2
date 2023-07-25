import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let arrays = [
    ["Casa", "Coche", "Ciudad", "Cesta"],
    ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
    ["Venezuela", "Veneno", "Voltaje"]
  ];

  let arr1 = add(arrays[0]);
  let arr2 = add(arrays[1]);
  let arr3= add(arrays[2]);
isEven(arr1)
console.log(arr1);
isEven(arr2)
console.log(arr2);
isEven(arr3)
console.log(arr3);
