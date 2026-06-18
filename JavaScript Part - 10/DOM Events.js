let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function() {                           // onclick property in JS we can also do it for multiple buttons as well
    alert("The Button was Clicked");
}
btn.onmouseenter = function() {                // onmouseenter property
    console.log("You just entered the the button");
}
btn.addEventListener("dblclick",function() {   // addEventListener is used to triggger when you have multiple buttons
    console.log("button clicked twice");
});
let para = document.querySelector("p");
para.addEventListener("click", function() {  // addEventListener is also used other elements of as well, other than button
    console.log("This Para was clicked");
});
let b = document.querySelector("#bt");
b.addEventListener("click",function() {
    console.log(this);   // this will return property on an element
});
let LM = document.querySelector("#LM");
LM.addEventListener("click", function(event) {
    console.log(event);
});

let inp = document.querySelector("Input");
inp.addEventListener("keyup",function() {   // use of keyboard event
    console.log("key pressed");
    console.log(event.code);
    console.log(event.key);
});

let form = document.querySelector("form");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    alert("form submitted");
    // extracting data from form

    let inp = document.querySelector("input");
    console.dir(inp.value);
});

let pk = document.querySelector("#para");
let ipk = document.querySelector("#input");

ipk.addEventListener("input",function() {
    console.log(ipk.value);
    pk.innerText = ipk.value;
})