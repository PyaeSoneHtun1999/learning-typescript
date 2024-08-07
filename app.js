var a = 10;
console.log(a);
// ! a = 'apple';   type script  မှာ ပထမ တစ်ခုကို "string" နဲ့  variable လုပ်ပြီးရင် number တို့ အခြားအရာတွေနဲံပြန်ပြီး variable လုပ်လိုု့မရ
var b = 'orange';


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
console.log(add(200,44));


function hi():void{
    console.log('hello TS')    //void type ကို return ပေးပြီးပြန်ထုတ်လို့မရပါ only console.log() နဲ့သာထုတ်လို့ရတယ်
}
hi();