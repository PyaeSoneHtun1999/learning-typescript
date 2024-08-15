import {Car} from './Car' ;
import {Motorcycle} from './MotorCycle';

const toyota =new Car('Toyota', 'Corolla', 4, 1990);
toyota.startEngine();
toyota.displayCarInfo();

const hondaCar =new Car('Honda', 'Civic', 4,1997);
hondaCar.startEngine();
hondaCar.displayCarInfo();

const honda = new Motorcycle('Honda','Sportstar','Japan');
honda.startEngine();
honda.displayMotorcycleInfo();

const suzuki =new Motorcycle('Suzuki', 'R6','suzuki');
suzuki.startEngine();
suzuki.displayMotorcycleInfo();