 // calling for the generate dice button id and event listener
    let gDie = document.getElementById("generate-dice");
    gDie.addEventListener("click", generateDie);
    //   call for the id and event listener roll all dice
    
class Dice {
    constructor(value){
        this.div = document.createElement("div");
        this.div.className = "myDiv";
        this.span = document.createElement("span");
        this.span.classList.add("spanned");
        this.randRoll();
        this.div.appendChild(this.span);
        document.body.appendChild(this.div);
    }
     randRoll(){
        this.span = document.createTextNode(roll());
    }

}


    let button = document.createElement("button");
    let rollTxt = document.createTextNode("Roll All");
    button.appendChild(rollTxt);
    document.body.appendChild(button);
    button.style.margin = "10px 100px";
    button.style.position = "absolute";

    button.addEventListener("click", this.randRoll);

// Rolls all the dice function
function generateDie(){
    let dice = new Dice;
}


// Random Roll Function
function roll() {
    let diceArray = [1, 2, 3, 4, 5, 6];
        for(i = 0; i < diceArray.length; i++){
    return diceArray[Math.floor(Math.random() * diceArray.length)];
        }
}
