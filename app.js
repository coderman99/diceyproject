//  this is the empty dice array that needs each generated div pushed to
var diceArray = [];

//  Constructor variable that generates a new die   
class Dice {
    constructor() {
        this.value = this.randRoll();
        this.div = document.createElement("div");
        this.div.className = "myDiv";
        this.div.innerText = this.value;
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function(){
            this.value = this.randRoll();
            this.div.innerText = this.value;
        }.bind(this));
        this.div.addEventListener("dblclick", function(){
            this.div.remove();
        }.bind(this));
    }
    randRoll() {
        return [Math.floor(Math.random() * 6 + 1)];
    }

}

// calling for the generate dice button id and event listener
let gDie = document.getElementById("generate-dice");
gDie.addEventListener("click", generateDie);
// Rolls all the dice function
function generateDie() {
    let dice = new Dice;
    diceArray.push(dice);
}
// this rolls all the dice on the screen via the button
let rollAll = document.getElementById("roll");
rollAll.addEventListener("click", function(){
    for(i = 0; i < diceArray.length; i++){
    diceArray[i].value = diceArray[i].randRoll();
    diceArray[i].div.innerText = diceArray[i].value;
    }
});


// // Sums all dice

let sumDie = document.getElementById("sumDice");
sumDie.addEventListener("click", function(){
    let total = 0;
    for(i = 0; i < diceArray.length; i++){
        total += diceArra[i].value;
    }
    alert(total);
});


// function sumDie() {

// }