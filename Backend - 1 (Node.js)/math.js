// Exporting files
const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;

const obj = {     // in case of more than 1 functions or value is present , then convert into object & then export
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

module.exports = obj;