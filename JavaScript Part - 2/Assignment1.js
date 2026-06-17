// Q1
// let n = prompt("enter a number : ");

// if(n%10 == 0) {
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

//Q2
// let nam = prompt("Enter your name : ");
// let age = prompt("Enter your age : ")
// console.log(nam +  "is"  + age +   "old");

// Q3
let str = "Apples"
if((str[0] == "A" || str[0] == "a") && (str.length >= 5)) {
    console.log("Golden String")
} else {
    console.log("Not Golden String")
}
// Q6 Bonus
let n1 = 32;
let n2 = 4372;
if((n1%10) == (n2%10)) {
    console.log("The last digit of both numbers are same which is ",n1%10);
} else {
    console.log("Last digit of both the numbers is not same")
}
