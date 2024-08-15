import {Vehicle} from './Vehicle';

export class Motorcycle extends Vehicle {
    constructor (make: string, model: string, public company: string){
        super(make,model);
    }
    startEngine(): void{
        console.log(`engine of the motorcycle: ${this.make} ${this.model}`);
    }
    
    displayMotorcycleInfo(): void{
        this.displayInfo();
        console.log(`Manufacture By: ${this.company}`);
    }
};
