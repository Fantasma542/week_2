"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //// metodos
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (nuevoTitulo) {
        this.title = nuevoTitulo;
    };
    Book.prototype.setnPages = function (nuevasPaginas) {
        this.nPages = nuevasPaginas;
    };
    Book.prototype.setIsbn = function (nuevoIsbn) {
        this.isbn = nuevoIsbn;
    };
    Book.prototype.setAuthor = function (nuevoAutor) {
        this.author = nuevoAutor;
    };
    Book.prototype.setEditorial = function (nuevaEditorial) {
        this.editorial = nuevaEditorial;
    };
    Book.prototype.toString = function () {
        return "Titles - ".concat(this.title, ",\nNumber of Pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
