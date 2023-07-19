class Person{
    public name: string;
    public age: number;
    private adress: string;
    constructor(name:string, age:number, adress:string){
        this.name = name;
        this.age = age
        this.adress = adress
    }
/////metodos
public printName(){
    return this.name
}

    }

let pepe = new Person('Juan', 15, 'Primo de Rivera')
console.log(pepe.printName());
