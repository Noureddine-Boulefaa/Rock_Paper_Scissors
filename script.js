function getComputerChoice()
{
    let random = Math.random() * 100;
    if(random <= 33 )
    {
        return "rock";
    }
    else if(random <= 66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    return prompt("please enter your choice 'rock' 'paper' or 'scissors': ");
}

function playRound()
{

    const humanChoice    = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();

    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            console.log("Draw no winner");
        }
        else if(computerChoice === "paper")
        {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }
        else if(computerChoice === "scissors")
        {
            humanScore++;
            console.log("You are the winner Rock beats scissors");
        }
    }



    else if(humanChoice === "paper")
    {
        if(computerChoice === "paper")
        {
            console.log("Draw no winner");
        }
        else if(computerChoice === "Rock")
        {
            humanScore++;
            console.log("You are the winner Paper beats Rock");
        }
        else if(computerChoice === "scissors")
        {
            computerScore++;
            console.log("You lose! scissors beats Paper");
        }
    }
    


    else if(humanChoice === "scissors")
    {
        if(computerChoice === "scissors")
        {
            console.log("Draw no winner");
        }
        else if(computerChoice === "Rock")
        {
            computerScore++;
            console.log("You lose! Rock beats scissors");
        }
        else if(computerChoice === "Paper")
        {
            humanScore++;
            console.log("You are the winner scissors beats Paper");
        }
    }
}

let humanScore    = 0 ;
let computerScore = 0 ;


function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        playRound();
    }

    if(humanScore > computerScore)
    {
        console.log("You are the winner");
    }
    else if(humanScore < computerScore)
    {
        console.log("You are lose");

    }
    else
    {
        console.log("Draw no winner");

    }
}

playGame();

