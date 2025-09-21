let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
const genCompChoice= ()=>{
    let options = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}
const showWinner=(userWin, userChoice, compChoice) =>{
    const msgContainer = document.querySelector(".msg-container");
    msgContainer.classList.remove("win", "lose", "draw");
    if(userWin){
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        console.log("User won!");
        msgContainer.classList.add("win");
    }else{
        compScore++;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        document.querySelector("#comp-score").innerText = compScore;
        console.log("Computer Won!");
        msgContainer.classList.add("lose");
    }
}
const drawGame = () =>{
    const msgContainer = document.querySelector(".msg-container");
    msgContainer.classList.remove("win", "lose", "draw");
    msg.innerText = `Game is Draw! Play Again`;
    console.log("the Game is draw");
    msgContainer.classList.add("draw");
}
const playGame = (userChoice)=>{
    const compChoice= genCompChoice();
    console.log("Computer Choice:",compChoice);
    console.log("User Choice:",userChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin= compChoice=== "paper" ? false:true;
        } else if(userChoice ==="paper"){
            userWin = compChoice=== "scissors"? false:true;
        }else{
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice); 
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    });
});
