import { Book } from "./book"

export class Library{
    private books:Book[];
    private address:string;
    private manager:string;

    constructor(books:Book[], address:string, manager:string){
        this.books = books
        this.address = address
        this.manager = manager
    }
    ////metodos
    public getBook():Book[]{
        return this.books
    }
    public getAddress():string{
        return this.address
    }
    public getManager():string{
        return this.manager
    }
    public setBook(nuevoLibro: Book[]):void{
        this.books = nuevoLibro
    }
    public setAddress(nuevaDireccion: string):void{
        this.address = nuevaDireccion
    }
    public setManager(nuevoManager: string):void{
        this.manager = nuevoManager
    }
    public toString(): string {
        let libros = '';
        for (let i = 0; i < this.books.length; i++) {
          let book = ` Book ${i + 1}:
${this.books[i].toString()}`;
          libros += book;
        }
        return libros;
      }
      public getNumberOfBooks():number{
        return this.books.length
      }
      public findByAuthor(author:string):Book[]{
        return this.books.filter(book => book.getAuthor() === author);
      }
    }
    
    