//Function to edit the names of the players
function editNames(){
    var player1, player2 
    player1 = prompt("Change Player 1's name.")
    player2 = prompt("Change Player 2's name.")

    document.querySelector("#player1").innerHTML = player1
    document.querySelector("#player2").innerHTML = player2
}


//Function to roll a dice
function rollDice(){
        var randomNum1 = Math.floor((Math.random() * 6)) + 1
        var randomNum2 = Math.floor((Math.random() * 6)) + 1

        document.getElementById("img1").setAttribute("src", "images/dice" + randomNum1 + ".png")
        document.getElementById("img2").setAttribute("src", "images/dice" + randomNum2 + ".png")

        if(randomNum1 > randomNum2){
            document.querySelector("#result").innerHTML = player1 + "won!"
        }else if(randomNum1 < randomNum2){
            document.querySelector("#result").innerHTML = player2 + "won!"
        }else{
            document.querySelector("#result").innerHTML = "You guys, drew!"
        }
}
