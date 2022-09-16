const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

const playAgainButton = document.querySelector('.playAgain')
const playerSelection = document.querySelector('.playerSelection')
const cpuSelection = document.querySelector('.cpuSelection')
const winAnnouncement = document.querySelector('.announcement')

const record = document.querySelector('.record')

let playerScore = 0;
let computerScore = 0;

let playerChoice = null //get back to playerChoice being null
let selectedPlayerImage;
let selectedCPUImage;

let userSelections = document.querySelector('.userSelections')
userSelections.addEventListener('click', (e) => {
    // const selectedPlayerImage = e.target
    if (playerChoice === null) {
        selectedPlayerImage = e.target
        playerChoice = selectedPlayerImage.className
        //enlarge user img
        selectedPlayerImage.classList.add('selected')
        //display user choice(text)
        // const playerSelection = document.querySelector('.playerSelection')
        playerSelection.classList.add('selected')
        playerSelection.textContent = "You selected" + " " + playerChoice;
        console.log(playerChoice)

        //generate CPU selection
        const cpuChoice = getComputerChoice()
        console.log(cpuChoice)
        //Enlarge CPU img
        //make the string look like a CSS selector and pass it to the querrySelector
        selectedCPUImage = document.querySelector('.cpuSelections .' + cpuChoice); // '.cpuSelections .rock'
        console.log(selectedCPUImage)
        selectedCPUImage.classList.add('selected')

        //Display CPU choice(text)
        //const cpuSelection = document.querySelector('.cpuSelection')
        cpuSelection.classList.add('selected')
        cpuSelection.textContent = "CPU Selected " + cpuChoice
        //compare results

        const winner = playRound(playerChoice, cpuChoice)

        //___ has won this round
        // const winAnnouncement = document.querySelector('.announcement')
        winAnnouncement.classList.add('selected')
        winAnnouncement.textContent = winner + " won this round!"
        if (winner == "draw") {
            winAnnouncement.textContent = "TIE"
        }

        if (winner == "player") {
            playerScore++
            console.log(playerScore)
        }
        if (winner == "robot") {
            computerScore++
            console.log(computerScore)
        }

        if (playerScore == 5 || computerScore == 5) {
            winAnnouncement.textContent = winner + " won the match! Play a new game"
        }
    
    //display Play Again button
    playAgainButton.classList.add('selected')


}
});

playAgainButton.addEventListener('click', () => {
    // allow click on new player choice
    playerChoice = null

    // console.log(document.querySelectorAll('.selected'))
    // document.querySelectorAll('.selected').forEach((element) => {
    //     element.classList.remove('selected')
    // })

    playerSelection.classList.remove('selected')
    cpuSelection.classList.remove('selected')
    selectedPlayerImage.classList.remove('selected')
    selectedCPUImage.classList.remove('selected')
    playAgainButton.classList.remove('selected')
    winAnnouncement.classList.remove('selected')
})


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
        //computerScore += 1;
        //alert("YOU LOST TO A ROBOT " + playerSelection + " : " + computerSelection);
        return "robot";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        //playerScore += 1;
        //alert("YOU BEAT THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        //playerScore += 1;
        //alert("YOU BEAT THE THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        //computerScore += 1;
        //alert("YOU LOST TO THE ROBOT " + playerSelection + " : " + computerSelection);
        return "robot"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        //playerScore += 1;
        //alert("YOU BEAT THE ROBOT " + playerSelection + " : " + computerSelection);
        return "player";

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        //computerScore += 1;
        //alert("YOU LOST TO THE ROBOT " + playerSelection + " : " + computerSelection);
        return "robot";
    }
    else if (playerSelection == computerSelection) {
        //alert("YOU ARE ROBOT: TRY AGAIN")
        return "draw";
    }
    else {
        //alert("INVALID ENTRY");
        return "error";
    }
}
