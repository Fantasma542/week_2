import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let arrays = [
    ["Casa", "Coche", "Ciudad", "Cesta"],
    ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
    ["Venezuela", "Veneno", "Voltaje"]
  ];

for (let i = 0; i < arrays.length; i++) {
    let array = arrays[i];
    let suma = add(array);
    isEven(suma);
  console.log(`Su suma es: ${suma}`);
}
