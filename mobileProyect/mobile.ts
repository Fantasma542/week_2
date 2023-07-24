export class Mobile{
    private name:string
    private trademark:string
    private model:string
    private color:string
    private price:number
    
    constructor(name:string, trademark:string, model:string, color:string, price:number){
        this.name = name
        this.trademark = trademark
        this.model = model
        this.color = color
        this.price = price
    }
    /// metodos
    public getName(): string {
        return this.name;
      }
    
    public getTrademark():string {
        return this.trademark;
      }
    
    public getModel():string {
        return this.model;
      }
    
    public getColor():string {
        return this.color;
      }
    
    public getPrice():number {
        return this.price;
      }

    public setName(newName: string):void {
        this.name = newName;
      }
    
    public setTrademark(newTrademark: string):void {
        this.trademark = newTrademark;
      }
    
    public setModel(newModel: string):void {
        this.model = newModel;
      }
    
    public setColor(newColor: string):void {
        this.color = newColor;
      }
    
    public setPrice(newPrice: number):void {
        this.price = newPrice;
      }
      public impMob():void {
        console.log(`The characteristics of the mobile ${this.getName()} are:`);
        console.log(`- Name: ${this.getName()}`);
        console.log(`- Trademark: ${this.getTrademark()}`);
        console.log(`- Model: ${this.getModel()}`);
        console.log(`- Color: ${this.getColor()}`);
        console.log(`- Price: ${this.getPrice()}`);
      }
    }