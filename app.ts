// ! type script ကိုသုံးရတဲ့ရည်ရွယ်ချက်က conbine time မှာမှန်ရင် runtime မှာမှန်တဲ့အတွက်သုံးခြင်း (combine time မှာအမှားပြဖို့အရေးကြီးတယ်)
// let a = 10;
// console.log(a);
// ! a = 'apple';   type script  မှာ ပထမ တစ်ခုကို "string" နဲ့  variable လုပ်ပြီးရင် number တို့ အခြားအရာတွေနဲံပြန်ပြီး variable လုပ်လိုု့မရ
// let b = 'orange';
// console.log(b);

// ! union type (data type )သတ်မှတ်ပြီး အဲ့ဒီ data type အတိုင်းပဲ ပြန်ပေးရသည်
let aa : number = 100;
let bb: string = 'apple';
let cc: boolean = false;
let dd: (number | string | boolean) ='orange'; //union type သုံးခုတည်းက ကြိုက်တာပေးလို့ရတယ် လက်ခံတယ်ဆိုတဲ့သဘော
let ee: string[]=['apple','200','bobo'];  // arrayတော့arrayပဲ string array ပဲ ဖြစ်ရမယ်
let ff: number[]=[200,300,44]; // number arrayပဲလက်ခံတယ်
let gg: any = 'pineapple'; // any type ဆိုတဲ့အဓိပ္ပာယ်ကတော့ ကြိုက်တာပေးလို့ရတယ်
let hh: [string,number,boolean] =['apple',290,true]; //ပြောထားတဲ့အတိုင်အစဥ်လိုက်ပဲလက်ခံတယ်

function add(a:number,b:number): number{   // aကို number ပေးတယ် bကိုလည်း number ပေးတယ် ထွက်လာတဲ့ အဖြေကိုလည်း number ပဲဖြစ်မယ် ;
    // number နဲံထွက်မယ့်ဟာကို string or other data type နဲံ ထုတ်လို့မရ
    return a + b;
}
//console.log(add(200,44));


function hi():void{
    //console.log('hello TS')    //void type ကို return ပေးပြီးပြန်ထုတ်လို့မရပါ only console.log() နဲ့သာထုတ်လို့ရတယ်
}
hi();

// ! NOT operator 
const pending : boolean = true;
const notPending =!pending; //false
//console.log(notPending); //false
//console.log(pending);

//const hasError : boolean = false;
//const completed : boolean = true;

// ! AND operator 
//let result = completed && hasError;
//console.log(result); //false

// ! OR operator 
//result = completed || hasError;
//console.log(result);
// ! Difinition an enum
    // You can define an enum using the enum keyword followed by the name of the enum and the
    // list of values. Each value in and enum is assigned a numeric value, starting frum 0 by default.
    // ** ကိုယ်နှစ်သက်တဲ့ နံပါတ်တွေကိုတော့ပေးလို့ရတယ် ဒါပေမယ့် default အနေနဲ့ဆိုရင်တော့ 0 ကနေပဲပေးတယ်
enum Direction{
    Up = 100,     //0  ကိုယ်ပေးချင်တဲ့ကိန်းဏာန်းကနေစပေးလို့ရတယ်
    Down,         //1
    Left,         //2
    Right,        //3
};
//console.log(Direction.Up);
//console.log(Direction.Down);
//console.log(Direction.Right);
//console.log(Direction.Left);

let move : Direction = Direction.Left;
//console.log("left =>",move);

enum Day{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isItWeekDay(day: Day) : boolean {  // console ကို boolean နဲ့ပဲပေးရမယ်
    return day >=Day.Monday && day <= Day.Friday;
};
let mon : Day = Day.Monday;
//console.log(isItWeekDay(mon));

let sun : Day = Day.Sunday;
//console.log(isItWeekDay(sun));

// ** switch & case နဲ့စမ်းသပ်ခြင်း
//ကြားရက်ကိုစစ်ခြင်း
function isWeekday(day: Day) : boolean{
    let isday : boolean;
    switch(day){
        case Day.Sunday:
        case Day.Saturday:
             isday = false;
             break; 
             default:
             isday = true
             break;
    }
    return isday
}

let toDay = Day.Monday;
//console.log(isWeekday(toDay));

let today = Day.Sunday;
//console.log('isWeekday(today) :>> ', isWeekday(today));

// weekend ကိုစစ်ခြင်း
function isWeekend(day: Day) : string | boolean {   // string or boolean နှစ်ခုတည်းက ကြိုက်တာနဲ့ပေးလို့ရတယ်
    let isweek : string | boolean
    switch(day){
        case Day.Saturday:
        case Day.Sunday:
            isweek = true;
            break;
            default:
                isweek = false;
                break;
    }
    return isweek ? "Go to PlayGround" : "Go to school";
}

//console.log('isWeekend(Day.Monday) :>> ', isWeekend(Day.Monday));
//console.log('isWeekend(Day.Sunday) :>> ', isWeekend(Day.Sunday));

//Data Type
// ! ကိုယ်ရေးချင်တာကို data type အရင်သတ်မှတ်ပေးခြင်းဖြင့် error တွေကို ရှောင်ရှားနိုင်တယ်
type UserType = {
    name : string;
    age : number;
    gender : "male" | "female" | "other";  // **union data type
    // gender : Gender;  
    isDev : boolean;
    hobbies : string[];
    address : {
        street : string;
        city : string;
        state : string;
        zipCode ? : number;   // ** optional ? ပုံမှန်ဆိုရင် zipCode ကို မထည့်ရင် error တက်မယ် optional(?) ကိုထည့်ထားခြင်းအားဖြင့်မထည့်ချင်လည်းရတယ်
    };
};

let user1 : UserType ={
    name : 'pyae sone',
    age : 22,
    gender : 'male',
    isDev : true,
    hobbies : ['Playing Football',"Gaming","Swimming"],
    address : {
        street : 'Hnin si',
        city : 'Hmawbi',
        state : "Yangon",
        zipCode : 10001,
    },
};

let user2 : UserType ={
    name : 'einzali',
    age : 23,
    gender :'female',
    isDev : false,
    hobbies :['Reading','Rolling','Talking'],
    address : {
        street : 'Hnin si',
        city : "Htautkyant",
        state : "Yangon",
    },
};
//console.log('user1 :>> ', user1);
//console.log('user2 :>> ', user2);

//interface 
// ! interface ကို OOP တွေမှာ အသုံးများတယ်
interface UserInterface {
    userName : string;
    age : number;
}
interface student extends UserInterface{  // ** userinterface ဆီကနေ extends(အမွေဆက်ခံ)ထားတဲ့အတွက် ခေါ်သုံးခွင့်ရှိတယ်
    studentId : number;   //userInterface အပြင် ထပ်တိုးသတ်မှတ်ထားတယ်
}
let maungMaung : student ={
    userName : "maung maung",
    age : 23,
    studentId : 1,
}
//console.log('maungMaung :>> ', maungMaung);

interface employee extends UserInterface  {
    employeeId : number,
}

let koko: employee ={
    userName : 'koko',
    age :25,
    employeeId : 1001,
};
//console.log('koko :>> ', koko);

interface userinterface2{
    userId : number;
    userName : string;
}
interface categoryInterface{
    catId : number;
    categoryName : string;
}
let maung : userinterface2 ={
    userId : 2,
    userName : 'maung'
};
//console.log('maung :>> ', maung);
let cat : categoryInterface ={
    catId : 2002,
    categoryName : 'Phone',
};
//console.log('cat :>> ', cat);

interface PostInterface {
    id : number;
    title : string;
    description : string;
    extra : userinterface2[] | categoryInterface[];
}
let post : PostInterface={
    id : 3,
    title: "Hello",
    description : "world",
    extra: [{userId:2,userName:"maung"}]
};
//console.log('post :>> ', post);

interface person {
    id : number;
    name : string;
    age : number;
    job? : string; //option
}
let pyaesone : person ={
    id : 1,
    name : 'pyae sone htun',
    age : 25,
    job : 'programmer',
}
//console.log('pyaesone :>> ', pyaesone);
interface Greek {
    (name : string) : string;
}
let greek : Greek =function(name: string){
    return `My name is ${name}`;
}
//console.log(greek('pyae sone htun'));
// index type in interface
interface StringArray{
    [index : number]: string;
}
let arr : StringArray =['bobo','koko'];
let firstArr :string = arr[1];
//console.log('arr[1] :>> ', arr[1]);
//console.log('firstArr :>> ', firstArr);
// !generic
//generic  ထပ်ခါထပ်ခါသုံးချင်တယ်ဆိုရင် သုံးတယ် 
//repeat ဖြစ်မယ့် code တွေကိုသုံးတယ်
 function hello <T>(a:T):T{
    console.log(a);
    return a;
 }
//  hello('boob');
//  hello(233);
//  hello(false);

 interface IForm<T>{
    name: string;
    email: string;
    password: string;
    extra : T[];
 }
 let registerForm : IForm<string> ={
    name: "pyae sone",
    email: "pyaesone@gmail.com",
    password: "09form",
    extra:["nono","rose","jame"]
 };
 //console.log('registerForm :>> ', registerForm);

 let loginForm: IForm<number>={
    name: 'einzali',
    email:'einzali@gmail.com',
    password:"01form",
    extra :[10,34,55],
 }
 //console.log('loginForm :>> ', loginForm);