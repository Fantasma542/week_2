export class Vector{
    private elements: number[];
    constructor(n:number, k:number){
        this.elements = this.generarNumero(n,k)
    }
    //metodo
    public generarNumero(n:number, k:number):number[] {
        let elementos:number[] = []
        for (let i = 0; i < n; i++) {
            let generador = Math.floor(Math.random() * (k + 1))
            elementos.push(generador)
        }
    return elementos
    }
    public print(){
        console.log(this.elements);
        
    }
    public add1(v1:Vector):Vector{
      let vectorPrincipal:Vector = new Vector(0, 0);
      if (v1.elements.length == this.elements.length){
          for(let i = 0; i < this.elements.length; i++){
              vectorPrincipal.elements.push(this.elements[i] + v1.elements[i]) 
          }
      }
      return vectorPrincipal
      }
      public subs(v1: Vector): Vector {
        let elements: number[] = [];
        let elements1 = this.elements.length;
        let elements2 = v1.elements.length;
        let minelements = elements1 < elements2 ? elements1 : elements2;
        for (let i = 0; i < minelements; i++) {
          let subs = this.elements[i] - v1.elements[i];
          elements.push(subs);
        }
    
        if (elements1 > elements2) {
          for (let i = minelements; i < elements1; i++) {
            elements.push(this.elements[i]);
          }
        } else {
          for (let i = minelements; i < elements2; i++) {
            elements.push(v1.elements[i]);
          }
        }
    
        let resultadoSubs = new Vector(0, 0);
        resultadoSubs.elements = elements;
        return resultadoSubs;
      }
      public mult(v1: Vector): Vector {
        let elements: number[] = [];
        let elements1 = this.elements.length;
        let elements2 = v1.elements.length;
        let minelements = elements1 < elements2 ? elements1 : elements2;
        for (let i = 0; i < minelements; i++) {
          let mult = this.elements[i] * v1.elements[i];
          elements.push(mult);
        }
    
        if (elements1 > elements2) {
          for (let i = minelements; i < elements1; i++) {
            elements.push(this.elements[i]);
          }
        } else {
          for (let i = minelements; i < elements2; i++) {
            elements.push(v1.elements[i]);
          }
        }
    
        let resultadoMult = new Vector(0, 0);
        resultadoMult.elements = elements;
        return resultadoMult;
      }
      public multNumber(n: number): Vector {
        let elements: number[] = [];
        for (let i = 0; i < this.elements.length; i++) {
          let numberMult = this.elements[i] * n
          elements.push(numberMult);
        }
        let resultadoNum = new Vector(0, 0);
        resultadoNum.elements = elements;
        return resultadoNum;
      }

    }


/////log
// let vector = new Vector(10, 50);
// let vector2 = new Vector(10, 50);
// let suma = vector.add(vector2);
// let subs = vector.subs(vector2);
// let mult = vector.mult(vector2);
// let numMult = vector.multNumber(2);
// vector.print()
// vector2.print()
// suma.print();
// subs.print();
// mult.print();
// numMult.print();
