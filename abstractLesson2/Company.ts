import {Entity} from './Entity';
import {Developer} from './Developer';

export class Company extends Entity {
    constructor (id: string,name: string, public developers: Developer[]){
        super(id,name);
    }

    getDescription(): string{
        return `Company: ${this.name}, Number of Developers: ${this.developers.length}`;
    }

    displayDevelopers(): void{
        this.developers.forEach(dev=>dev.displayInfo());
    }
}