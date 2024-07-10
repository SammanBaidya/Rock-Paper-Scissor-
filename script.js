var yourScore = 0; 
var opponentScore = 0;


//ONE PIECE IS REAL 

var choices = ["rock", "paper", "scissors"];


//<image id = "rock" src="rock.png"
window.onload = function() {
    for (let i = 0; i < choices.length; i++) {
        //Image choice for each element
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    let you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    let opponent = choices[Math.floor(Math.random() * 3)];//0 - 999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    // check winner
    if (you === opponent) {
    
        //draw
        yourScore++;
        opponentScore++;
    
    } else if (you === "rock" && opponent === "scissors" ||
               you === "scissors" && opponent === "paper" ||
               you === "paper" && opponent === "rock") {
       
                // You win
       
     yourScore++;
    
    } else {
        // Opponent wins
        opponentScore++;
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
