// Q1
let num = [1,2,3,4,5];

const sq = num.map((n) => n * n);
console.log(sq);

let s = sq.reduce((acc, cur) => acc + cur, 0);
let avg = sum / num.length;
console.log(avg);

// Q2
let k = [1,2,3,4,5];
let c = k.map((n) => n = n + 5);
console.log(c);

// Q3
let str = ["adam","bob","drake","jake"];
let up = k.map((h) => h.toUpperCase());
console.log(up);

// Q4
const doubleAndReturnArgs = (arr , ...arg) => [
    ...arr,
    ...arg.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);

// Q5
const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});
mergeObject({a: 1, b: 2}, {c: 3, d: 4});