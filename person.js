var Person = /** @class */ (function () {
    function Person(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    /////metodos
    Person.prototype.printName = function () {
        return this.name;
    };
    return Person;
}());
var pepe = new Person('Juan', 15, 'Primo de Rivera');
console.log(pepe.printName());
