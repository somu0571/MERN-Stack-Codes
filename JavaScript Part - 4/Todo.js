let todo = [];

let req = prompt("please enter your choice request");
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("=============");
        for (let t of todo) {
            console.log(t);
        }
        console.log("=============");
    } else if (req == "add") {
        let task = prompt("please enter the task which you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "quit") {
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }

    req = prompt("please enter your choice request");
}
