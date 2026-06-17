for(let i=1; i<=5; i++) {
    console.log(i);
}

// Print Odd Numbers
for(let i=1; i<=15; i++) {
    if(i%2 != 0) {
        console.log(i);
    }
}
// Print Even Number
for(let i=1; i<=15; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

// Multiplication table of 5
for(let i=1; i<=10; i++) {
    console.log(i*5);
}

// Nested Loop 
for(let i=1; i<=3; i++) {
    console.log('outer loop',i);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

// for loop using arrays
let fruits = ["apple","orange","mango","guava","lichi"];
for(let i=0; i<fruits.length; i++) {
    console.log(i,fruits[i]);
}

// Nested Loops
let hero = [["Iron Man","Thor","Hulk"],["Spider Man","Captain America","Thanos"]];
for(let i=0; i<hero.length; i++) {
    console.log('List',i);
    for(let j=0; j<hero.length; j++) {
        console.log(hero[i][j]);
    }
}

// for of loop
let tata = ["Tiago","Tigor","Punch","Altroz","Nexon","Curvv","Sierra","Harrier","Safari"];
for(t of tata) {
    console.log(t);
}