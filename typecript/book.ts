
export class Book{
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }
    //// metodos
    public getTitle():string{
    return this.title;
}

    public getnPages():number{
        return this.nPages;
    }
    public getIsbn():string{
        return this.isbn;
    }
    public getAuthor():string{
        return this.author;
    }
    public getEditorial():string{
        return this.editorial;
    }


    public setTitle(nuevoTitulo:string):void{
    this.title = nuevoTitulo;
}

    public setnPages(nuevasPaginas:number):void{
        this.nPages = nuevasPaginas;
    }
    public setIsbn(nuevoIsbn:string):void{
        this.isbn = nuevoIsbn;
    }
    public setAuthor(nuevoAutor:string):void{
        this.author = nuevoAutor;
    }
    public setEditorial(nuevaEditorial:string):void{
        this.editorial = nuevaEditorial;
    }
    public toString():string{

return `Title - ${this.title},
Number of Pages - ${this.nPages}
ISBN - ${this.isbn}
Author - ${this.author}
Editorial - ${this.editorial}`;
    }
}