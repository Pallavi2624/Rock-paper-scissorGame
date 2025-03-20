let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const showWinner = (userWin , userChoices , compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;

        console.log ("you win!");
        msg.innerText = `you win! your ${userChoices} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;

        console.log("you lose");
        msg.innerText = `you lose! your ${userChoices} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("game was draw")
    msg.innerText = " game was draw";
    msg.style.backgroundColor = "gray";
}

const gencomputerChoice = () => {
    const options = ["rock","paper","scissors"]; // index values 0 1 and 2 so we multipy by 3 its gives 0 to 2 range 
    const randIdx = Math.floor(Math.random()*3) ;
    return options[randIdx];
}

const playGame = (userChoices) => {
    console.log("user choices = ", userChoices);
    // now generate computer choices 
    const compChoice = gencomputerChoice();
    console.log("comp choice = " , compChoice);

    if(userChoices === compChoice){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoices === "rock"){
            // compterchoices is scissors or paper
           userWin = compChoice === "paper" ? false : true;

        }else if(userChoices === "paper"){
            // compterchoices is scissors or rock hoga
            userWin = compChoice === "scissors" ? false : true;

        }else {
            // compterchoices is paper or rock 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoices , compChoice); // show winner and call showwinner function
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoices = choice.getAttribute("id");
        // console.log("choices was clicked" , userChoices);
        playGame(userChoices); 
    });
});