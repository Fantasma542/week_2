function evenNumbers(num: number): void {
    for (let i = 0; i <= num; i ++) {
        if (num % 2 == 0) {
            console.log(i);
        }
    }
  }

evenNumbers(10)


function myRevert(myArr:string[]):void {
    for (let i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
        
    }
}
myRevert(['0', '2', '3', '5', '2'])

function isRainbow(colors: string[]):void{
    for (let i = 0; i < colors.length; i++) {
        let colores = colors[i]
        if (colores.includes('Rojo' ) || colores.includes('Amarillo') || colores.includes('Naranja') || colores.includes('Verde') || colores.includes('Azul') || colores.includes('Azul oscuro') || colores.includes('Morado') || colores.includes('Rosa')) {
            console.log(`Este color esta en el arcoiris y es el ${colores}`);
        } else {
            console.log(`Este color no esta en el arcoiris y es el ${colores}`);
            
        }
        
        
    }
}
// Colores que hay en el arcoiris 'Rojo' 'Naranja' ' Amarillo' 'Verde' 'Azul' 'Azul oscuro' ' Morado' 'Rosa'

isRainbow(['Rojo', 'Amarillo', 'Marron', 'Negro', 'Blanco'])

export function add(myWords: string[]) {
    let suma = 0;
    
    for (let i = 0; i < myWords.length; i++) {
        let word = myWords[i];
      suma += word.length;
    }
    return suma;
  }

  let palabras = add(["Hola", "Soy"])
console.log(palabras);
