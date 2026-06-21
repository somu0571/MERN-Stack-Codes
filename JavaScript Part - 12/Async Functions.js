// // use of Async Function
// async function greet() {   // it returns as promise
//     return "hello";
//     throw "404 page not found";
// }

// greet()  // using then() & catch() function used
//    .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ",result);
//    })
//    .catch((err) => {
//     console.log("Promise was rejected with err : ",err);
//    })

// Await Keyword
// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         let num = Math.floor(Math.random() * 10) + 1;
//         console.log(num);
//         resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();  // await prints the getNum step by step
//     await getNum();
//     await getNum();
// }

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promise failed");
            }
            h1.style.color = color;
            console.log("Color Change to",color);
            resolve("color changed !");
        },delay);
    })
}

async function demo() {
    try {                             // using Error Handling
       await changeColor("red",1000);
       await changeColor("orange",1000);
       await changeColor("green",1000);
    } catch {
        console.log("Error Occured !");
    }

    let a = 5;
    console.log(a);
    console.log("The value is : ", a + 3);
}

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#res");
//     img.setAttribute("src",link);
// })



// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("Error - ",e);
//         return "/";
//     }
// }

// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error - ",e);
//         return "NO fact found";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: {Accept: "application/json"}};  // headers to convert in json format
//         let res = await axios.get(url,config);
//         console.log(res.data);   
//     } catch (err) {
//         console.log(err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);

    show(colleges);

});

function show(colleges) {
    let list = document.querySelector("#list");
    for(col of colleges) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try {
        let res = await axios.get(url+country);  // axios used for http request sending in JS
        return res.data;
    } catch(e) {
        console.log("error : ",e);
        return [];
    }
}