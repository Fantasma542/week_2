function zodiac(day, month) {
    if (day >= 21 && month === 3 || day <= 19 && month === 4) {
        return 'Eres Aries';
    }
    else if (day >= 20 && month === 4 || day <= 20 && month === 5) {
        return 'Eres Tauro';
    }
    else if (day >= 21 && month === 5 || day <= 20 && month === 6) {
        return 'Eres Geminis';
    }
    else if (day >= 21 && month === 6 || day <= 22 && month === 7) {
        return 'Eres Cancer';
    }
    else if (day >= 23 && month === 7 || day <= 22 && month === 8) {
        return 'Eres Leo';
    }
    else if (day >= 23 && month === 8 || day <= 22 && month === 9) {
        return 'Eres Virgo';
    }
    else if (day >= 23 && month === 9 || day <= 22 && month === 10) {
        return 'Eres Libra';
    }
    else if (day >= 23 && month === 10 || day <= 21 && month === 11) {
        return 'Eres Escorpio';
    }
    else if (day >= 22 && month === 11 || day <= 21 && month === 12) {
        return 'Eres Sagitario';
    }
    else if (day >= 22 && month === 12 || day <= 19 && month === 1) {
        return 'Eres Capricornio';
    }
    else if (day >= 20 && month === 1 || day <= 18 && month === 2) {
        return 'Eres Acuario';
    }
    else if (day >= 19 && month === 2 || day <= 20 && month === 3) {
        return 'Eres Piscis';
    }
}
var aries = zodiac(22, 3);
console.log(aries);
var tauro = zodiac(22, 4);
console.log(tauro);
var geminis = zodiac(5, 6);
console.log(geminis);
var cancer = zodiac(22, 6);
console.log(cancer);
var leo = zodiac(5, 8);
console.log(leo);
var virgo = zodiac(5, 9);
console.log(virgo);
var libra = zodiac(9, 10);
console.log(libra);
var escorpio = zodiac(30, 10);
console.log(escorpio);
var sagitario = zodiac(19, 12);
console.log(sagitario);
var capricornio = zodiac(5, 1);
console.log(capricornio);
var acuario = zodiac(15, 2);
console.log(acuario);
var piscis = zodiac(25, 2);
console.log(piscis);
function continent(country) {
    if (country === 'España' || country === 'Francia' || country === 'Rumania' || country === 'Italia' || country === 'Belgica') {
        console.log('Europa');
    }
    else if (country === 'Pakistan' || country === 'China' || country === 'Japon' || country === 'Korea del Sur' || country === 'India') {
        console.log('Asia');
    }
    else if (country === 'Egipto' || country === "Marruecos" || country === 'Nigeria' || country === 'Kenia' || country === 'Republica del Congo') {
        console.log('Africa');
    }
    else if (country === 'Estados Unidos' || country === 'Argentina' || country === 'Mexico' || country === 'Chile' || country === 'Brasil') {
        console.log('America');
    }
}
continent('España');
continent('China');
continent('Marruecos');
continent('Estados Unidos');
function isEven(number) {
    if (number % 2 == 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
isEven(25);
