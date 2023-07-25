export class Point{
    private x:number
    private y:number
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }
    ////metodos
    public getNumX():number{
        return this.x
    }
    public getNumY():number{
        return this.y
    }
    public setNumX(NewNumX:number):void{
        this.x = NewNumX
    }
    public setNumY(NewNumY:number):void{
        this.y = NewNumY
    }

    public toString(){
        console.log(`"(${this.getNumX()}, ${this.getNumY()})"`);
        
    }
    public distanceToOrigin():number{
        return Math.sqrt(this.getNumX() * this.getNumX() + this.getNumY() * this.getNumY())
    }
    public calculateDistance(anotherPoint:Point):number{
        const deltaX = anotherPoint.x - this.getNumX();
    const deltaY = anotherPoint.y - this.getNumY();
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
    }
    public calculateQuadrant():number{
      let numero;
        if (this.getNumX() === 0 ||this.getNumY() === 0) {
            numero = 0;
        } else if (this.getNumX() > 0 && this.getNumY() > 0) {
            numero = 1;
          } else if (this.getNumX() < 0 && this.getNumY() > 0) {
            numero = 2;
          } else if (this.getNumX() < 0 && this.getNumY() < 0) {
            numero = 3;
          } else  if (this.getNumX() > 0 && this.getNumY() < 0){
            numero = 4;
          }
      return numero;
    }
    public calculateNearest(points: Point[]):Point{
      
          let nearestPoint = points[0];
          let minDistance = this.calculateDistance(points[0]);
      
          for (const point of points) {
            let distance = this.calculateDistance(point);
            if (distance < minDistance) {
              minDistance = distance;
              nearestPoint = point;
            }
          }
      
          return nearestPoint;
        }
    }


