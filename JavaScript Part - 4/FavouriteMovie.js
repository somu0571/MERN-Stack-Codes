const favo = "Avatar";
let guess = prompt("Guess any movie name : ");

while((guess != favo)) {
    if(guess == "quit") {
        break;
    }
    guess = prompt("Guess any movie name again, you entered wrong movie name : ");
}

if(guess == favo) {
    console.log("Congrats !!");
}
