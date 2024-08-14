// ! type script ကိုသုံးရတဲ့ရည်ရွယ်ချက်က conbine time မှာမှန်ရင် runtime မှာမှန်တဲ့အတွက်သုံးခြင်း (combine time မှာအမှားပြဖို့အရေးကြီးတယ်)
// let a = 10;
// console.log(a);
// ! a = 'apple';   type script  မှာ ပထမ တစ်ခုကို "string" နဲ့  variable လုပ်ပြီးရင် number တို့ အခြားအရာတွေနဲံပြန်ပြီး variable လုပ်လိုု့မရ
// let b = 'orange';
// console.log(b);
// ! union type (data type )သတ်မှတ်ပြီး အဲ့ဒီ data type အတိုင်းပဲ ပြန်ပေးရသည်
var aa = 100;
var bb = 'apple';
var cc = false;
var dd = 'orange'; //union type သုံးခုတည်းက ကြိုက်တာပေးလို့ရတယ် လက်ခံတယ်ဆိုတဲ့သဘော
var ee = ['apple', '200', 'bobo']; // arrayတော့arrayပဲ string array ပဲ ဖြစ်ရမယ်
var ff = [200, 300, 44]; // number arrayပဲလက်ခံတယ်
var gg = 'pineapple'; // any type ဆိုတဲ့အဓိပ္ပာယ်ကတော့ ကြိုက်တာပေးလို့ရတယ်
var hh = ['apple', 290, true]; //ပြောထားတဲ့အတိုင်အစဥ်လိုက်ပဲလက်ခံတယ်
function add(a, b) {
    // number နဲံထွက်မယ့်ဟာကို string or other data type နဲံ ထုတ်လို့မရ
    return a + b;
}
//console.log(add(200,44));
function hi() {
    //console.log('hello TS')    //void type ကို return ပေးပြီးပြန်ထုတ်လို့မရပါ only console.log() နဲ့သာထုတ်လို့ရတယ်
}
hi();
// ! NOT operator 
var pending = true;
var notPending = !pending; //false
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 100] = "Up";
    Direction[Direction["Down"] = 101] = "Down";
    Direction[Direction["Left"] = 102] = "Left";
    Direction[Direction["Right"] = 103] = "Right";
})(Direction || (Direction = {}));
;
//console.log(Direction.Up);
//console.log(Direction.Down);
//console.log(Direction.Right);
//console.log(Direction.Left);
var move = Direction.Left;
//console.log("left =>",move);
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
function isItWeekDay(day) {
    return day >= Day.Monday && day <= Day.Friday;
}
;
var mon = Day.Monday;
//console.log(isItWeekDay(mon));
var sun = Day.Sunday;
//console.log(isItWeekDay(sun));
// ** switch & case နဲ့စမ်းသပ်ခြင်း
//ကြားရက်ကိုစစ်ခြင်း
function isWeekday(day) {
    var isday;
    switch (day) {
        case Day.Sunday:
        case Day.Saturday:
            isday = false;
            break;
        default:
            isday = true;
            break;
    }
    return isday;
}
var toDay = Day.Monday;
//console.log(isWeekday(toDay));
var today = Day.Sunday;
//console.log('isWeekday(today) :>> ', isWeekday(today));
// weekend ကိုစစ်ခြင်း
function isWeekend(day) {
    var isweek;
    switch (day) {
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
var user1 = {
    name: 'pyae sone',
    age: 22,
    gender: 'male',
    isDev: true,
    hobbies: ['Playing Football', "Gaming", "Swimming"],
    address: {
        street: 'Hnin si',
        city: 'Hmawbi',
        state: "Yangon",
        zipCode: 10001,
    },
};
var user2 = {
    name: 'einzali',
    age: 23,
    gender: 'female',
    isDev: false,
    hobbies: ['Reading', 'Rolling', 'Talking'],
    address: {
        street: 'Hnin si',
        city: "Htautkyant",
        state: "Yangon",
    },
};
var maungMaung = {
    userName: "maung maung",
    age: 23,
    studentId: 1,
};
var koko = {
    userName: 'koko',
    age: 25,
    employeeId: 1001,
};
var maung = {
    userId: 2,
    userName: 'maung'
};
//console.log('maung :>> ', maung);
var cat = {
    catId: 2002,
    categoryName: 'Phone',
};
var post = {
    id: 3,
    title: "Hello",
    description: "world",
    extra: [{ userId: 2, userName: "maung" }]
};
var pyaesone = {
    id: 1,
    name: 'pyae sone htun',
    age: 25,
    job: 'programmer',
};
var greek = function (name) {
    return "My name is ".concat(name);
};
var arr = ['bobo', 'koko'];
var firstArr = arr[1];
//console.log('arr[1] :>> ', arr[1]);
//console.log('firstArr :>> ', firstArr);
// !generic
//generic  ထပ်ခါထပ်ခါသုံးချင်တယ်ဆိုရင် သုံးတယ် 
//repeat ဖြစ်မယ့် code တွေကိုသုံးတယ်
function hello(a) {
    console.log(a);
    return a;
}
var registerForm = {
    name: "pyae sone",
    email: "pyaesone@gmail.com",
    password: "09form",
    extra: ["nono", "rose", "jame"]
};
//console.log('registerForm :>> ', registerForm);
var loginForm = {
    name: 'einzali',
    email: 'einzali@gmail.com',
    password: "01form",
    extra: [10, 34, 55],
};
//console.log('loginForm :>> ', loginForm);
