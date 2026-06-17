// Higher Order Functions

function multipleGreet(func,count) { 
    for(let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(function() {console.log("namaste")},1000);


// Return in HOF
let odd = function(n) {
    console.log(!(n%2 == 0));
}

let even = function(n) {
    console.log(n%2 == 0);
}

function OddorEvenFactory() {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }

        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }

        return even;
    } else {
        console.log("wrong request");
    }
}

let request = "odd";