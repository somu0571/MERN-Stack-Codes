// Q1
let array = [7,9,0,-2];
let n = 3
let a = array.slice(0,n);
console.log(a);

// Q2
let arr = [7,9,0,-2];
let k = 3;
let b = array.slice(arr.length-n);
console.log(b);

// Q3
let str = prompt("Enter a string");
if(str.length == 0) {
    alert("The String is empty");
} else {
    alert("The String is not empty");
}

// Q4
let s = "SOmsuBhRa";
let id = prompt("Enter the Index");
if(s[id] == s[id].toLowerCase()) {
    console.log("LowerCase");
} else {
    console.log("UpperCase");
}

// Q5
let k = prompt("Enter the string : ");
let c = k.trim();
console.log(c);

// Q6
let ar = ["hello","a",23,64,99,-6];
let id = 64;

if(arr.indexOf(id) != -1) {
    console.log("element found in the array");
} else {
    console.log("element not found in the array");
}