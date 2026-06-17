// Q1
let nums = [10,20,30,40,50];

let ans = nums.every((el) => el%10 == 0);
console.log(ans);

// Q2 to return min value from an array
let j = [1,2,3,4,5,7,9,12]

let a = j.reduce((min,el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(a);