import { Person } from "./person";

export class Contacts{
    public people:Person[];
    constructor(){
        this.people = [];
    }
    printCalendar():void{
      for (let i = 0; i < this.people.length; i++) {
        let objeto = this.people[i];
        console.log(`
Nombre: ${objeto.name}
Edad: ${objeto.age}
Dirección: ${objeto.getAddress()}`);
      }
    }
  }




