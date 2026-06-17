// Q1
let but = document.createElement("button");
let inp = document.createElement("input");

but.innerText = "Click Here !"
document.querySelector("body").append(but);
document.querySelector("body").append(inp);

// Q2
but.setAttribute("id","btn");
inp.setAttribute("placeholder","username");

// Q3
let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");  // btnstyle is the class in CSS

// Q4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);

// Q5
let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);
