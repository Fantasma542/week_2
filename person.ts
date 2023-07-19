export class Person{
    public name: string;
    public age: number;
    private address: string;
    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age
        this.address = address
    }
/////metodos
public printName(){
    return this.name
}
public yearOfBirth(currentYear:number):number{
    return currentYear - this.age
}
public setAddress(adress:string):void{
    this.address = adress
}
public getAddress():string{
    return this.address
}

}


////log
// let pepe = new Person('Juan', 20, 'Primo de Rivera')
// console.log(pepe.printName());

// console.log(pepe.yearOfBirth(2023));

// pepe.setAddress('Los Angeles')
// console.log(pepe);

// console.log(pepe.getAddress());

