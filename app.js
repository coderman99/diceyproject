//  this is the empty dice array that needs each generated div pushed to
var diceArray = [];

//  Constructor variable that generates a new die   
class Dice {
    constructor(value) {
        this.div = document.createElement("div");
        this.div.className = "myDiv";
        this.div.innerText = roll();
        document.body.appendChild(this.div);
        diceArray.push(this.div);
    }
    randRoll() {

    }

}

// calling for the generate dice button id and event listener
let gDie = document.getElementById("generate-dice");
gDie.addEventListener("click", generateDie);
// Rolls all the dice function
function generateDie() {
    let dice = new Dice;
}
// this rolls all the dice on the screen via the button
let rollAll = document.getElementById("roll");
rollAll.addEventListener("click", rollDice);

// Rolls all the dice function
function rollDice() {
    for (i = 0; i < diceArray.length; i++) {
        this.div.innerText = diceArray[i].roll();
        diceArray[i].div.innerText = diceArray[i].value;
    }
}

// Random Roll Function
function roll() {
    return [Math.floor(Math.random() * 6 + 1)];
}

// Sums all dice

function sumDie() {

}