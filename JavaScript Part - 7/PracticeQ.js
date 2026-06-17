// Q1
const sq = (j) => {
     j*j;
}

// Q2 printing "hello world 5 times with interval of 2 seconds"
let id = setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear console ran");
},10000);