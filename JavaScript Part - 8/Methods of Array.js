let ar = [1,2,3,4,5];

let pr = function(el) {
    console.log(el);
}

ar.forEach(pr); // use of forEach, used for execution of code

// forEach in Object
let arr = [
    {
    name: "aman",
    marks: 95,
},
{
    name: "shradha",
    marks: 94.4,
},
{
    name: "rajat",
    marks: 92
}
];

arr.forEach(function (student) {
    console.log(student.marks)
})

// Map Method
let n = [1,2,3,4];

let double = n.map((k) => {
    return k*k
});

// another eg of map

let gpa = arr.map((k) => {
    return k.marks/10;
});

let eve = [1,2,3,4,5,6,7,8,9,10];
let ans = eve.filter((ele) => {
    return ele%2 == 0; // even if true else false , use to filter , as per the condition
})

// Every Method -> when element of an array is true, then the Every is also true , else false, if anyone element is false
let k = [2,4,6].every((ele) => {
    ele%2 == 0;
});
console.log(k);

// Some Method -> when some element of an array is true, it return true , else false
let j = [1,2,3,4].some((ele) => {
    ele%2 == 0;
});
console.log(j);

// Reduce Method -> Reduce the array to a single value
let p = [1,2,3,4,5];
let red = p.reduce((res,ele) => (res + ele));
console.log(red);

// Max value in array , using reduce function
let pk = [1,2,3,4,5,6,8,9,20]
let m = pk.reduce((max,el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(m);