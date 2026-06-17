// Spread
let arr = [1,2,3,4,5,6];
Math.min(...arr)   // use of spread :- basically add 3 dots ...

// Spread for Array Literals
let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let spr = [...odd, ...even]; // spread in array if there is 2

// Spread for Object Literals
const data = {
    email: "somcha2006@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123, country: "India"};

// Rest
// Allow a func^n to take an indefinite number of arguments and bundle them in an array
function sum(...args) {
    for(let i=0; i<args.length; i++) {
        console.log("You gave us: ",args[i]);
    }
}
function min(a,b,c,d) {
    console.log(arguments);
}