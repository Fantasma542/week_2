import { Mobile } from "./mobile";

export class MobileCollection{
    private mobiles: Mobile[]
    private totalPrice:number
    constructor(mobiles: Mobile[]){
        this.mobiles = mobiles
        this.totalPriceCalculation();;
    }
    /// metodos
    public getMobile():Mobile[]{
        return this.mobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public setMobile(newMobiles: Mobile[]):void{
        this.mobiles = newMobiles
        this.totalPriceCalculation();
        
    }
    public setTotalPrice(newTotalPrice:number):void{
        this.totalPrice = newTotalPrice
    }
    private totalPriceCalculation():void{
        let total = 0;
        for (const mobile of this.mobiles) {
          total += mobile.getPrice();
        }
        this.totalPrice = total;
      }
    public printCollection(): void{
        let mobile = this.mobiles
        for (let i = 0; i < mobile.length; i++) {
            console.log(`
            The characteristics of the mobile ${mobile[i].getName} are:
            • Name: ${mobile[i].getName()}
            • Trademark: ${mobile[i].getTrademark()}
            • Model: ${mobile[i].getModel()}
            • Color: ${mobile[i].getColor()}
            • Price: ${mobile[i].getPrice()}
            `);
            
        }
        console.log(`Price overall: ${this.totalPrice}`);
        
    }
    
}