let students = ["aman","naman","chaman"];
console.log(students);

// Array Methods

// 1. Push
let cars = ["audi","toyota","benetly"];
cars.push("bmw");
console.log(cars);
// 2. Pop Method to Delete
cars.pop();
console.log(cars);
// 3. Unshift - use to add elements in start
cars.unshift("Ferrari");
console.log(cars);
// 4. Shift - use to delete from start and return
cars.shift();
console.log(cars);

// Array Methods (IndexOf & Includes)
let marks = [100,200,300,400,500,600,700,800,900,1000];
let ford = marks.indexOf(1000); // Checking for index value returns position of the element
console.log(ford);
// Includes use to search a value in array it return true or false value
let kia = marks.includes(500);
console.log(kia);
// Concatention & Reverse in an Array
let primary = ["red","yellow","blue"];
let secondary = ["purple","voilet","pink"];
let arrcon = primary.concat(secondary);
console.log(arrcon);
let arrrev = arrcon.reverse();
console.log(arrrev);
// Slicing in Array
let car = ["Tata","Hyundai","Mahindra","VW","Honda"];
console.log(car.slice());
console.log(car.slice(1));
// Splicing in Array - used for removes/replace/add elements in place (important remember)
console.log(car.splice(4));
console.log(car.splice(0,0,"Creta","Nexon","Brezza")); // adding elements in an array using slice
console.log(car);
// Sort method in Arrays
let days = ["Monday","Tuesday","Wednesday","Friday","Thursday","Sunday","Saturday"];
let sortit = days.sort();
console.log(sortit);

// Array References (Address)
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log(arr2 == arr1);

// Nested Arrays
let array = [[1,2],[3,4],[5,6]];
console.log(array[0][0]); // Accessing element in nested arrays