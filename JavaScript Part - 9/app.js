// Selecting Element by ID
document.getElementById("mainImg");
let k = document.getElementById("mainImg");
console.log(k);
let d = document.getElementById("description");
console.log(d);

// Selecting Element by ClassName
let smallImages = document.getElementsByClassName("oldImg");
// Selecting Element by Tag Name
let j = document.getElementsByTagName("p");
console.log(j);

// Query Selectors in JS
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));

// Query Selection using All in JS
console.log(document.querySelectorAll("div a"));

// Properties & Methods
let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

// Artibutes Manipulation
let img = document.querySelector('img');
console.log(img.getAttribute('id'));  // fetching attributes
console.log(img.setAttribute('id','SpiderMan_id')); // changing attributes

// Manipulating Styles
let heading = document.querySelector("h1");
console.log(heading.style);
// console.log(heading.style.color = "purple");

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "yellow";
}


// using classList
let i = document.querySelector('img');
console.log(i.classList);

let heada = document.querySelector("h1");
let p = heada.classList.add("green");
console.log(p);  // simarly other other function also works of classList

// Navigation on Page
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.nextElementSibling);
console.log(h4.previousElementSibling);

// Adding Elements

let n = document.createElement('p');
n.innerText = "Hi, this is Lionel Messi !";

// Select the body correctly
let bd = document.querySelector('body');  // or simply document.body

// Append the <p> element to the body
bd.appendChild(n);
n.append("I'm GOAT of Argentina !!"); // in this append you can add anything like string text

bd.prepend(n);  // appending before

// insertAdjacentElement(where,element);

// Removing Element
// there are two methods
// removeChild(element) & remove(element)