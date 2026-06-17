const max = prompt("Enter the max number range");
const rand = Math.floor(Math.random()*max) + 1;
const guess = prompt("Enter the number to be guessed");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == rand) {
        console.log("Congrats !!!, You guess the correct number which is ",rand);
        break;
    } else if(guess < rand) {
        guess = prompt("your guess was too small, pls try again later !!!");
    } else {
        guess = prompt("your guess was too large, pls try again later !!!");
    }
}