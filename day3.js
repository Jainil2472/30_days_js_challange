//Activity 1

num = 10;
if (num > 0) {
    console.log(`${num} is positive `);
}else if (num < 0) {
    console.log(`${num} is negative`);
}else{
    console.log(`${num} is zero`);
}

age = 17.9;
if (age >= 18) {
    console.log(`you are ${age} years old that's why you can vote`);
}else{
    console.log(`you are ${age} years old that's why you cannot vote`);
}

//Activity 2

let a=10,b=10,c=11130;
if (a>b && a>c) {
    console.log(`${a} is largest number`);
}else if (b>c) {
    console.log(`${b} is largest from three `);
}else{
    console.log(`${c} is largest number`);
}

// Activity 3
let day=4
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("fridat");
        break;
    case 6:
        console.log("saturday");
        break;

    default:
        console.log("sunday");

        break;
}

let marks = 50;
switch (true) {
    case marks >= 80 && marks <= 100:
        console.log(`A`);
        break;
    case marks <= 79 && marks >= 70:
        console.log(`B`);
        break;
    case marks <= 69 && marks >= 50:
        console.log(`C`);
        break;
    case marks <= 49 && marks >= 35:
        console.log(`D`);
        break;
    case marks < 35 :
        console.log(`F`);
        break;
    default:
        console.log(`X`);
        break;
}

//Activity 4

let evenOdd = 129;

((evenOdd % 2)==0?console.log(`${evenOdd} is even number`): console.log(`${evenOdd} is odd number`));

// Activity 5
let year = 2014;

if ((year%4)==0) {
    console.log(`${year} is leapyear`);
} else {
    console.log(`${year} is not leap year`);
}