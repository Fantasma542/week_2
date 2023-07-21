"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            var objeto = this.people[i];
            console.log("\nNombre: ".concat(objeto.name, "\nEdad: ").concat(objeto.age, "\nDirecci\u00F3n: ").concat(objeto.getAddress()));
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
