//Q1
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Q2
let name = "Apna College";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

// Q3
console.log(name.slice(4).replace("l","t"));

// Q4
let start = ["january","july","march","august"];
start.shift();
start.shift();
console.log(start);
start.unshift("june");
start.unshift("july");
console.log(start);

// Q5
let mon = ["january","july","march","august"];
mon.splice(0,2,"july","june");
console.log(mon);

// Q6
let prolang = ['c','c++','html','javascript','python','java','c#','sql'];
prolang.reverse();
let id = prolang.indexOf('javascript');
console.log(id);