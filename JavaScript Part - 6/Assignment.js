// Q1
let arr = [8,9,10,1,2,3,4,5,6,7];
let n = 5;

function getElements(arr,num) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr,n);

// Q4
let str = "helloWorld";

function countVowels(str) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(str.CharAt(i) == 'a' || str.CharAt(i) == 'e' || str.CharAt(i) == 'i' || str.CharAt(i) == 'o' || str.CharAt(i) == 'u') {
            count++;
        }
    }
    return count;
}

// Q5

let start = 100;
let end = 300;

function RandomGen(start,end) {
    let diff = end - start;
    let k = Math.floor(Math.random() * diff) + start;
}

// Q3
let country = ["Australia","Germany","United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);

// Q2
let s = "abcddabcdefgggf";

function getUnique(s) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }

    return ans;
}
getUnique(s);