"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    ////metodos
    Library.prototype.getBook = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setBook = function (nuevoLibro) {
        this.books = nuevoLibro;
    };
    Library.prototype.setAddress = function (nuevaDireccion) {
        this.address = nuevaDireccion;
    };
    Library.prototype.setManager = function (nuevoManager) {
        this.manager = nuevoManager;
    };
    Library.prototype.toString = function () {
        var libros = '';
        for (var i = 0; i < this.books.length; i++) {
            var book = " Book ".concat(i + 1, ":\n").concat(this.books[i].toString());
            libros += book;
        }
        return libros;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.getAuthor() === author; });
    };
    return Library;
}());
exports.Library = Library;
