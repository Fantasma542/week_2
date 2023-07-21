"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = this.generarNumero(n, k);
    }
    //metodo
    Vector.prototype.generarNumero = function (n, k) {
        var elementos = [];
        for (var i = 0; i < n; i++) {
            var generador = Math.floor(Math.random() * (k + 1));
            elementos.push(generador);
        }
        return elementos;
    };
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add1 = function (v1) {
        var vectorPrincipal = new Vector(0, 0);
        if (v1.elements.length == this.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                vectorPrincipal.elements.push(this.elements[i] + v1.elements[i]);
            }
        }
        return vectorPrincipal;
    };
    Vector.prototype.subs = function (v1) {
        var elements = [];
        var elements1 = this.elements.length;
        var elements2 = v1.elements.length;
        var minelements = elements1 < elements2 ? elements1 : elements2;
        for (var i = 0; i < minelements; i++) {
            var subs = this.elements[i] - v1.elements[i];
            elements.push(subs);
        }
        if (elements1 > elements2) {
            for (var i = minelements; i < elements1; i++) {
                elements.push(this.elements[i]);
            }
        }
        else {
            for (var i = minelements; i < elements2; i++) {
                elements.push(v1.elements[i]);
            }
        }
        var resultadoSubs = new Vector(0, 0);
        resultadoSubs.elements = elements;
        return resultadoSubs;
    };
    Vector.prototype.mult = function (v1) {
        var elements = [];
        var elements1 = this.elements.length;
        var elements2 = v1.elements.length;
        var minelements = elements1 < elements2 ? elements1 : elements2;
        for (var i = 0; i < minelements; i++) {
            var mult = this.elements[i] * v1.elements[i];
            elements.push(mult);
        }
        if (elements1 > elements2) {
            for (var i = minelements; i < elements1; i++) {
                elements.push(this.elements[i]);
            }
        }
        else {
            for (var i = minelements; i < elements2; i++) {
                elements.push(v1.elements[i]);
            }
        }
        var resultadoMult = new Vector(0, 0);
        resultadoMult.elements = elements;
        return resultadoMult;
    };
    Vector.prototype.multNumber = function (n) {
        var elements = [];
        for (var i = 0; i < this.elements.length; i++) {
            var numberMult = this.elements[i] * n;
            elements.push(numberMult);
        }
        var resultadoNum = new Vector(0, 0);
        resultadoNum.elements = elements;
        return resultadoNum;
    };
    return Vector;
}());
exports.Vector = Vector;
/////log
// let vector = new Vector(10, 50);
// let vector2 = new Vector(10, 50);
// let suma = vector.add(vector2);
// let subs = vector.subs(vector2);
// let mult = vector.mult(vector2);
// let numMult = vector.multNumber(2);
// vector.print()
// vector2.print()
// suma.print();
// subs.print();
// mult.print();
// numMult.print();
