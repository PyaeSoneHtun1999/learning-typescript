// ! abstract 
// abstract တွေက rule သတ်မှတ်တာ abstract တွေက return မပေးဘူး return မပေးရင် void type ဖြစ်တယ်
//abstract တွေမှာ function က body မပါဘူး
// ** All abstract method that must be implemented by subclasses 

export abstract class Vehicle{
    constructor (public make: string, public model: string) { }
    //constructor ဆိုတာ ခေါ်တာနဲ့တန်းသုံးလို့ရတယ်
    
    abstract startEngine(): void;
    
    displayInfo(): void{
        console.log(`Vehicle: ${this.make} ${this.model}`);
    }
}
// ** Old Version 
// public make: string;
// public model : string;

// constructor (make: string,model: string){
//     this.make =make;
//     this.model = model;
// }