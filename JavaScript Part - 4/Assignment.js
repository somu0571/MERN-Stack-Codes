// Q1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);

// Q2
let n = 287152;
let count = 0;

let copy = n;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// Q3
let number = 287152;
let sum = 0;

let cop = number;
while(cop > 0) {
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}

console.log(sum);

// Q4
let a = 5;
let fact = 1;

for(let i=1; i<=n; i++) {
    fact *= i;
}

console.log("factorial of 5 is : ",i);

// Q5
let ar = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i=0; i<=ar.length; i++) {
    if(largest < ar[i])  {
        largest = ar[i];
    }
}

console.log(largest);