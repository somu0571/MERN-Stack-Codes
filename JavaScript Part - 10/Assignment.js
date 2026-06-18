let p = document.querySelector("#para");
p.addEventListener("mouseout",function()  {
    console.log("Mouse left the paragraph")
})

let btn = document.querySelector("button");

btn.addEventListener("click",function() {
    btn.style.backgroundColor = "green";
})