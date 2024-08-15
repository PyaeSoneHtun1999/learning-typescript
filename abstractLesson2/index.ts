import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { Developer } from "./Developer";
import { Company } from "./Company";


// Create ProgrammingLanguage
const java =new ProgrammingLanguage('1',"Java",'OOP');
const javascript =new ProgrammingLanguage('2',"Java Script",'Multi-Paradigm');
const python =new ProgrammingLanguage('3','Python','Scripting Paradigm');
const ruby =new ProgrammingLanguage('4','Ruby','OOP');
const erlang =new ProgrammingLanguage('5','Erlang','Functional-Paradigm');
const rust =new ProgrammingLanguage('6','Rust','Cocurrent-Paradigm');
const go =new ProgrammingLanguage('7','Go','Cocurrent-Paradigm');

// Create Developer

const dev1 = new Developer('1','bobo',java);
const dev2 =new Developer('2','nono',javascript);
const dev3 =new Developer('3','john',python);

// Create Company
const company1 = new Company('1','Apple',[dev1,dev2,dev3]);
const company2 = new Company('2','Google',[dev3,dev2]);

// information
company1.displayInfo();
company2.displayDevelopers();

//favorite language details
dev1.displayFavoriteLanguage();


