"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(day, month) {
    var signo;
    if (day >= 21 && month === 3 || day <= 19 && month === 4) {
        signo = 'Eres Aries';
    }
    else if (day >= 20 && month === 4 || day <= 20 && month === 5) {
        signo = 'Eres Tauro';
    }
    else if (day >= 21 && month === 5 || day <= 20 && month === 6) {
        signo = 'Eres Geminis';
    }
    else if (day >= 21 && month === 6 || day <= 22 && month === 7) {
        signo = 'Eres Cancer';
    }
    else if (day >= 23 && month === 7 || day <= 22 && month === 8) {
        signo = 'Eres Leo';
    }
    else if (day >= 23 && month === 8 || day <= 22 && month === 9) {
        signo = 'Eres Virgo';
    }
    else if (day >= 23 && month === 9 || day <= 22 && month === 10) {
        signo = 'Eres Libra';
    }
    else if (day >= 23 && month === 10 || day <= 21 && month === 11) {
        signo = 'Eres Escorpio';
    }
    else if (day >= 22 && month === 11 || day <= 21 && month === 12) {
        signo = 'Eres Sagitario';
    }
    else if (day >= 22 && month === 12 || day <= 19 && month === 1) {
        signo = 'Eres Capricornio';
    }
    else if (day >= 20 && month === 1 || day <= 18 && month === 2) {
        signo = 'Eres Acuario';
    }
    else if (day >= 19 && month === 2 || day <= 20 && month === 3) {
        signo = 'Eres Piscis';
    }
    return signo;
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
function continent(country) {
    var continente;
    if (country === 'España' || country === 'Francia' || country === 'Rumania' || country === 'Italia' || country === 'Belgica') {
        continente = 'Eres de Europa';
    }
    else if (country === 'Pakistan' || country === 'China' || country === 'Japon' || country === 'Korea del Sur' || country === 'India') {
        continente = 'Eres de Asia';
    }
    else if (country === 'Egipto' || country === "Marruecos" || country === 'Nigeria' || country === 'Kenia' || country === 'Republica del Congo') {
        continente = 'Eres de Africa';
    }
    else if (country === 'Estados Unidos' || country === 'Argentina' || country === 'Mexico' || country === 'Chile' || country === 'Brasil') {
        continente = 'Eres de America';
    }
    else if (country === 'Nueva Zelanda' || country === 'Papua Nueva Guinea' || country === 'Australia') {
        continente = 'Eres de Oceanía';
    }
    return continente;
}
console.log(continent('España'));
console.log(continent('China'));
console.log(continent('Marruecos'));
console.log(continent('Estados Unidos'));
console.log(continent('Australia'));
function isEven(number) {
    if (number % 2 == 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
exports.isEven = isEven;
isEven(25);
