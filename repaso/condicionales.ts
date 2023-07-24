function zodiac(day, month){
    let signo;
if (day >= 21 && month === 3 || day <= 19 && month ===4){
    signo = 'Eres Aries'

} else if (day >= 20 && month ===4 || day <= 20 && month ===5 ) {
    signo = 'Eres Tauro'
        
} else if (day >= 21 && month ===5 || day <= 20 && month ===6 ) {
    signo = 'Eres Geminis'
} else if (day >= 21 && month ===6 || day <= 22 && month ===7 ) {
    signo = 'Eres Cancer'
} else if (day >= 23 && month ===7 || day <= 22 && month ===8 ) {
    signo = 'Eres Leo'
}else if (day >= 23 && month ===8 || day <= 22 && month ===9) {
    signo = 'Eres Virgo'
}else if (day >= 23 && month ===9 || day <= 22 && month ===10 ) {
    signo = 'Eres Libra'
} else if (day >= 23 && month ===10 || day <= 21 && month ===11 ) {
    signo = 'Eres Escorpio'
} else if (day >= 22 && month ===11 || day <= 21 && month ===12 ) {
    signo = 'Eres Sagitario'
} else if (day >= 22 && month ===12 || day <= 19 && month ===1 ) {
    signo = 'Eres Capricornio'
} else if (day >= 20 && month ===1 || day <= 18 && month ===2 ) {
    signo = 'Eres Acuario'
} else if (day >= 19 && month ===2|| day <= 20 && month ===3) {
    signo = 'Eres Piscis'
}
return signo
}
console.log(zodiac(12, 4));
console.log(zodiac(22, 4));
console.log(zodiac(5, 6));
console.log(zodiac(22, 6));
console.log(zodiac(5, 8));
console.log(zodiac(5, 9));
console.log(zodiac(9, 10));
console.log(zodiac(30, 10));
console.log(zodiac(19, 12));
console.log(zodiac(5, 1));
console.log(zodiac(15, 2));
console.log(zodiac(25, 2));



function continent(country){
    if (country === 'España' || country === 'Francia' || country === 'Rumania' || country === 'Italia' || country === 'Belgica' ){
        console.log('Eres de Europa');
        
    } else if (country === 'Pakistan' || country === 'China' || country === 'Japon' || country === 'Korea del Sur' || country === 'India'){
        console.log('Eres de Asia');
        
    } else if (country === 'Egipto'|| country === "Marruecos" || country === 'Nigeria'|| country === 'Kenia' || country === 'Republica del Congo'){
        console.log('Eres de Africa');
        
    }else if(country === 'Estados Unidos' || country === 'Argentina' || country === 'Mexico' || country === 'Chile' || country === 'Brasil'){
        console.log('Eres de America');
        
    } else if(country === 'Nueva Zelanda' || country === 'Papua Nueva Guinea' || country === 'Ausralia'){
        console.log('Eres de Oceanía'); 
}
}
continent('España')
continent('China')
continent('Marruecos')
continent('Estados Unidos')
continent('Nueva Zelanda')

export function isEven(number){
    if (number % 2 == 0) {
        console.log('El numero es par');
    } else {
        console.log('El numero es impar');
        
    }
}
isEven(25)