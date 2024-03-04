const pc = ["rock","paper","sciossors"];
let random;
let mybtns = document.querySelectorAll("button");
let prevBtn = null;
let myp1 = document.getElementById("myp1")
let ph3 = document.getElementById("ph3")
let ch3 = document.getElementById("ch3")
let pdis = document.getElementById("pdis")
let cdis = document.getElementById("cdis")
let compcount = 0;
let playercount = 0;


mybtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (prevBtn) {
            prevBtn.style.backgroundColor = ""; 
        }
        btn.style.backgroundColor = "tomato"; 
        prevBtn = btn;
    });
});


function playGame(playerChoice){
    let computerchoice = Math.floor(Math.random(random) * 3 )
    console.log(computerchoice)
    if(playerChoice === pc[computerchoice]){
        result = "IT'S A TIE"
    }
    else{
        switch(playerChoice){
            case "rock":
            result = (computerchoice === 2) ? "YOU WİN" : "YOU LOOSE"
            break;
            case "paper":
            result = (computerchoice === 0) ? "YOU WİN" : "YOU LOOSE"
            case "sciossors":
            result = (computerchoice === 1) ? "YOU WİN" : "YOU LOOSE"
        }
    }
    myp1.textContent = result;
    ch3.textContent = "COMPUTER: " + pc[computerchoice]
    ph3.textContent = "PLAYER: " + playerChoice;
    if(myp1.textContent === "YOU WİN"){
        playercount++
    }
    else{
        compcount++
    }
    cdis.textContent = "Computer: " + compcount
    pdis.textContent = "Player1: " + playercount
    setTimeout(() => {

        if(playercount === 3){
            alert("PLAYER1 WİN")
            playercount = 0;
            compcount = 0;
        }
        else if(compcount === 3){
            alert("COMPUTER WİN")
            playercount = 0;
            compcount = 0;
            
        }
        
    }, 1000);
   
}