import { Vehicle } from './Vehicle';

export class Car extends Vehicle {
    constructor (make: string,model: string,public doors: number,public releaseYear: number){
        super(make,model);
    }
    startEngine(): void{
        console.log(`engine of the car : ${this.make} model is: ${this.model} releaseYear:${this.releaseYear}`);
    }
    
    displayCarInfo(): void{
        this.displayInfo();
        console.log(`Doors: ${this.doors}`);
    }   
}