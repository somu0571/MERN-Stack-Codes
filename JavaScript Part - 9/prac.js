// Q1
let para = document.createElement('p');
para.innerText = "Hey I m red";
para.style.color = "red";
document.querySelector('body').append(para);

// Q2
let para1 = document.createElement('p');
para1.innerText = "Hey I m blue";
para1.style.color = "blue";
document.querySelector('body').append(para1);

// Q3
let divi = document.createElement('div');
let h1 = document.createElement('h1');
let para3 = document.createElement('p');

h1.innerText = "I'm in a div";
para3.innerText = "ME TOO !";

divi.append(h1);
divi.append(para3);
divi.style.backgroundColor = "orange"
document.querySelector('body').append(divi);
