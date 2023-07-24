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
        console.log("\"(".concat(this.x, ", ").concat(this.y, ")\""));
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var deltaX = anotherPoint.x - this.x;
        var deltaY = anotherPoint.y - this.y;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
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
