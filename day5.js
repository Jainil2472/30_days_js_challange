//Activity 1
function evenodd(num) {
    if ((num%2)==0) {
        console.log("is even");
    }else{
        console.log("is odd");
    }
}
evenodd(101);

function square(num1) {
    return num1*num1;
}
console.log(square(11)); 

//Activity 2

let funExp = function (num1,num2) {
    if (num1<num2) {
        console.log(`${num2} is bigger`);
    }else{
        console.log(`${num1} is bigger`);
    }
}
funExp(10,50);

