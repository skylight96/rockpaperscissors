const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

game()

function game() {
    let playerSelection = document.querySelector('.userSelections').addEventListiner('click', );
}






// function game() {
    //for (let round = 0; round < 5; round++) {
    //    let computerSelection = getComputerChoice();
    //    let playerSelection = window.prompt("ROCK PAPER SCISSORS GO!", "CHOOSE");
    //    let result = playRound(playerSelection, computerSelection);
    //    console.log(playerScore, computerScore)
    //    console.log("The winner is", result)
    //    if (playerScore == 3) {
    //        console.log("YOU BEAT A ROBOT; HERE'S A COOKIE");
    //        break
    //   }
    //    if (computerScore == 3) {
    //        console.log("YOU LOST TO A ROBOT; GET A REAL JOB");
    //        break
    //    }
    //    if (result == "draw") {
    //       round--;
    //    }
    //    if (result == "error") {
    //       break
    //    }
    //}
//}


// use \n to put alert on new line || /*"like this"*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        alert("YOU LOST TO A ROBOT " + playerSelection + " : " + computerSelection);
        return "robot";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        alert("YOU BEAT THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        alert("YOU BEAT THE THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        alert("YOU LOST TO THE ROBOT " + playerSelection + " : " + computerSelection);
        return "robot"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        alert("YOU BEAT THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        alert("YOU LOST TO THE ROBOT " + playerSelection + " : " + computerSelection);
        return "robot";
    }
    else if (playerSelection == computerSelection) {
        alert("YOU ARE ROBOT: TRY AGAIN")
        return "draw";
    }
    else {
        alert("INVALID ENTRY");
        return "error";
    }
}
