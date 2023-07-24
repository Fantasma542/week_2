"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    /// metodos
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.impMob = function () {
        console.log("The characteristics of the mobile ".concat(this.getName(), " are:"));
        console.log("- Name: ".concat(this.getName()));
        console.log("- Trademark: ".concat(this.getTrademark()));
        console.log("- Model: ".concat(this.getModel()));
        console.log("- Color: ".concat(this.getColor()));
        console.log("- Price: ".concat(this.getPrice()));
    };
    return Mobile;
}());
exports.Mobile = Mobile;
