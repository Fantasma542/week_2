import { Book } from "./book";
import { Library } from "./Library";

let libro1 = new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let libro2 = new Book("La casa de Bernarda Alba", 152, "9326326-BC54500", "Federico García Lorca", "Mesetas Ediciones");
let libro3 = new Book("Romancero Gitano", 250, "5241234-BC75463", "Federico García Lorca", "Juan Régulo Pérez");

let books = [libro1, libro2, libro3];
let libros = new Library(books, "Gran Vía", "Juan");
console.log(libros.toString());

console.log(libros.getNumberOfBooks());
console.log(libros.findByAuthor("Federico García Lorca"));