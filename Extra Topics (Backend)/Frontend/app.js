// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "eve",
//     age: 25,
//     marks: 99,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "casey",
//     age: 23,
//     marks: 85,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// let arr = [1,2,3,4];
// arr.sayHello = () => {
//     console.log("Hello !, i am arr");
// }

// Factory Functions

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${name}`);
        }
    }

    return person;
}