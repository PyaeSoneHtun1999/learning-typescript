import {Entity} from './Entity';
import {ProgrammingLanguage} from './ProgrammingLanguage';

export class Developer extends Entity {
    constructor(id: string, name: string, public favoriteLanguage: ProgrammingLanguage){
        super(id,name)
    }

    getDescription(): string{
        return `Developer: ${this.name},Favorite Language: ${this.favoriteLanguage.name}`
    }

    displayFavoriteLanguage(): void {
        this.favoriteLanguage.displayInfo();
    }
}