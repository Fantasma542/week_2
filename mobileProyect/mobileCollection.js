"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPriceCalculation();
        ;
    }
    /// metodos
    MobileCollection.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setMobile = function (newMobiles) {
        this.mobiles = newMobiles;
        this.totalPriceCalculation();
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            total += mobile.getPrice();
        }
        this.totalPrice = total;
    };
    MobileCollection.prototype.printCollection = function () {
        var mobile = this.mobiles;
        for (var i = 0; i < mobile.length; i++) {
            console.log("\n            The characteristics of the mobile ".concat(mobile[i].getName, " are:\n            \u2022 Name: ").concat(mobile[i].getName(), "\n            \u2022 Trademark: ").concat(mobile[i].getTrademark(), "\n            \u2022 Model: ").concat(mobile[i].getModel(), "\n            \u2022 Color: ").concat(mobile[i].getColor(), "\n            \u2022 Price: ").concat(mobile[i].getPrice(), "\n            "));
        }
        console.log("Price overall: ".concat(this.totalPrice));
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
