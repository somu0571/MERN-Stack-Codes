// Q1
const arrAvg = (arr) => {
    let total = 0;
    for(let i=0; i<arr; i++) {
        total += i;
    }
    return total/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrAvg(arr));

// Q2
let n = 4;
const isEven = (num) => num%2 == 0;