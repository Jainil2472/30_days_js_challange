// Activity 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i*5}`);    
}

//Activity 2
let i =1;
let sum = 0;
while (i <= 10) {
    sum += i;
    
    i++;
}
console.log(sum);

i = 10;
while (i>=1) {
    console.log(i);
    i--;
}


//Activity 3
let j = 1, c = 1;
let num = 1;
fact = 1;
do {
    console.log(j);
    j++;
    
} while (j<=5);

do {

    fact = c*fact;
    c++;
} while (c<=num);
console.log(fact);

//Activity 4

for (let k = 1; k <= 5; k++) {
    for (let s = 1; s <= k; s++) {
        process.stdout.write("*");
        
    }
    console.log("");
    
}


//Activity 5

for (let x = 1; x <= 10; x++) {
    if (x == 5) {
        continue;
    }
    console.log(x);
    
}
for (let x = 1; x <= 10; x++) {
    if (x == 5) {
        break;
    }
    console.log(x);
    
}