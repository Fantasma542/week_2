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
        console.log(`"(${this.x}, ${this.y})"`);
        
    }
    public distanceToOrigin():number{
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    public calculateDistance(anotherPoint:Point):number{
        const deltaX = anotherPoint.x - this.x;
    const deltaY = anotherPoint.y - this.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
    }
    public calculateQuadrant():number{
        if (this.x === 0 ||this.y === 0) {
            return 0;
        } else if (this.x > 0 && this.y > 0) {
            return 1;
          } else if (this.x < 0 && this.y > 0) {
            return 2;
          } else if (this.x < 0 && this.y < 0) {
            return 3;
          } else {
            return 4;
          }
    }
    public calculateNearest(points: Point[]):Point{
      
          let nearestPoint = points[0];
          let minDistance = this.calculateDistance(points[0]);
      
          for (const point of points) {
            const distance = this.calculateDistance(point);
            if (distance < minDistance) {
              minDistance = distance;
              nearestPoint = point;
            }
          }
      
          return nearestPoint;
        }
    }


