import { isEven } from "./condicionales";
import { add } from "./buclesFor";

const arrays = [
    ["Casa", "Coche", "Ciudad", "Cesta"],
    ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"],
    ["Venezuela", "Veneno", "Voltaje"]
  ];

for (let i = 0; i < arrays.length; i++) {
    let array = arrays[i];
    let sumCharacters = add(array);
    isEven(sumCharacters);
  console.log(`Suma de caracteres: ${sumCharacters}`);
}
