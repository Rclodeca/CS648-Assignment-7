
function game(){
    const humanChoice = window.prompt("Choose rock, paper or scissors:").trim();

    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        window.alert("Invalid entry.");
        return;
    }

    const roll = Math.floor(Math.random() * Math.floor(3));
    const options = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }
    const computerChoice = options[roll];

    let result;
    if(humanChoice == "rock" && computerChoice == "scissors" 
        || humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "scissors" && computerChoice == "paper"){
        result = "win";
    }
    else if(humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "scissors" && computerChoice == "rock"){
        result = "lose";
    }
    else {
        result = "tie";
    }

    window.alert(`You picked ${humanChoice}, and the computer picked ${computerChoice}. You ${result}!`);
}

game();