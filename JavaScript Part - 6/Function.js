function hello() {
    console.log("Hello World");
}

hello();

function print1to5() {
    for(let i=0; i<=5; i++) {
        console.log(i);
    }
}

print1to5();

// Function with Arguments

function printName(name) {
    console.log(name)
}

printName("aman");

function sumof2(a,b) {
    let k = a+b;
    console.log(k);
}

sumof2(5,6);

// return keyword

function sum(x,z) {
    return x+z;  // used , when you call it in console it will give you the output
}

let s = function(k,c) {  // alternate way to declare a function
    return k + c;
}

s(5,7)