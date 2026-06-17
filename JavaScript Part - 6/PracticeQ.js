// Q1
function printPoem() {
    console.log("Twinkle Twinkle, Little Star");
    console.log("How I wonder what you are")
}

printPoem();

// Q2
function diceRoll() {
    const k = Math.floor(Math.random() * 6) + 1;
    console.log(k);
}

diceRoll();

// Q3
function avg3(a,b,c) {
    const avg = (a+b+c)/3;
    console.log(avg);
}

avg3(3,4,7);

// Q4
function table(a) {
    for(let i=1; i<=a; i++) {
        console.log(i*a);
    }
}

table(10);

// Q5 sum of the numbers
function sumno(n) {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// Q6 Concat in string in array

let str = ["Mack","Jack","Kate","Nike"];

function concat(str) {
    let res = "";
    for(let i=0; i<str.length; i++) {
        res += str[i];
    }

    return res;
}

// Q7 What will be the output

let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();