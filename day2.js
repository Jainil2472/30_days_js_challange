//Activity 1

let a=20,b=3;
console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);

console.log(a%b);

//Activity 2

num1 = 10;
num1 += 20;
console.log(num1);
num1 -= 5;
console.log(num1);

//Activity 3

no1=20;
no2=30;
function grater(num1,num2) {
    return num1>num2;
}
console.log(grater(no1,no2));

function lessthan(num1,num2) {
    return num1<num2;
}
console.log(lessthan(no1,no2));

function graterEqual(num1,num2) {
    return num1>=num2;
}
console.log(graterEqual(20,20));

function lessEqual(num1,num2) {
    return num1<=num2;
}
console.log(lessEqual(no1,no2));

function equalEqual(num1,num2) {
    return num1==num2;
}
console.log(equalEqual(10,"10"));

function threeEqual(num1,num2) {
    return num1===num2;
}
console.log(threeEqual(10,"10"));   //here type conversion not allowed 


//Activity 4


let password = "ainlljk@jklhfn";
let uppercase = /[A-Z]/g;
let spacial = /[^\w\s']/g;
let case1,case2 = false;
if (password.search(uppercase)>=0 && password.search(spacial)>=0) {
    console.log("case1 is satisfy...");
    case1 = true;
}else{
    console.log("password should contain uppercase and spacial character ...");
}

if (password.length <= 8 ||  password.length>= 24) {
    console.log("password should be greaterthan 8 or lessthan 24");
}else{
    console.log("case2 satisfy...");
    case2 = true;
}

if (!case1 || !case2) {
    console.log("improve your password");
}else{
console.log("password set successfully");}


//Activity 5

let ter = (case1==true && case2 ==true)?console.log("password set successfully"):console.log("improve your password");