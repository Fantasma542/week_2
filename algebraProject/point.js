"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    ////metodos
    Point.prototype.getNumX = function () {
        return this.x;
    };
    Point.prototype.getNumY = function () {
        return this.y;
    };
    Point.prototype.setNumX = function (NewNumX) {
        this.x = NewNumX;
    };
    Point.prototype.setNumY = function (NewNumY) {
        this.y = NewNumY;
    };
    Point.prototype.toString = function () {
        console.log("\"(".concat(this.getNumX(), ", ").concat(this.getNumY(), ")\""));
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.getNumX() * this.getNumX() + this.getNumY() * this.getNumY());
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var deltaX = anotherPoint.x - this.getNumX();
        var deltaY = anotherPoint.y - this.getNumY();
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        var numero;
        if (this.getNumX() === 0 || this.getNumY() === 0) {
            numero = 0;
        }
        else if (this.getNumX() > 0 && this.getNumY() > 0) {
            numero = 1;
        }
        else if (this.getNumX() < 0 && this.getNumY() > 0) {
            numero = 2;
        }
        else if (this.getNumX() < 0 && this.getNumY() < 0) {
            numero = 3;
        }
        else if (this.getNumX() > 0 && this.getNumY() < 0) {
            numero = 4;
        }
        return numero;
    };
    Point.prototype.calculateNearest = function (points) {
        var nearestPoint = points[0];
        var minDistance = this.calculateDistance(points[0]);
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            var distance = this.calculateDistance(point);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = point;
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
