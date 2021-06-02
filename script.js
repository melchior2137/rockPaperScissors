let itemIndex = 1; // default Player item
let bodyElement = document.querySelector("body");
let computerScore=0;
let playerScore=0;
items = ["ROCK", "PAPER", "SCISSORS"]

//ZROBIC TABLICE OBRAZKOW

function cpuIndexGen(min, max) {                                 // Random CPU Item Generator
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the     minimum is inclusive
}

function nextItem() {
    itemIndex++;
    if (itemIndex > 2) {
        itemIndex = 0;
    }
    document.getElementById("playerItem").animate([
        // keyframes
        { transform: 'rotate(360deg)' },
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      setTimeout(function(){
      document.getElementById("playerItem").innerHTML = items[itemIndex];
      },300)
}
function prevItem() {
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = 2;
    }
    document.getElementById("playerItem").animate([
        // keyframes
        { transform: 'rotate(-360deg)' },
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      setTimeout(function(){
      document.getElementById("playerItem").innerHTML = items[itemIndex];
      },300)
}
function play(playerItem) {                     //main game function
    cpuIndex = cpuIndexGen(0, 3);

    document.getElementById("cpuItem").animate([
        // keyframes
        { transform: 'rotate(360deg)' },
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      setTimeout(function(){
      document.getElementById("cpuItem").innerHTML = items[cpuIndex];
      },300)


    
    setTimeout(function(){
        if (cpuIndex == playerItem) {
        bodyElement.style.border = "25px solid #F4DD0F";
        playerScore++;
        computerScore++;
    }
    else{
        switch(cpuIndex){
            case 0:
                if(playerItem==1){
                    bodyElement.style.border = "25px solid #44E179";
                    playerScore++;
                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    computerScore++;

                }
                break;
            case 1:
                if(playerItem==2){
                    bodyElement.style.border = "25px solid #44E179";
                    playerScore++;

                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    computerScore++;

                }
                break;
            case 2:
                if(playerItem==0){
                    bodyElement.style.border = "25px solid #44E179";
                    playerScore++;

                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    computerScore++;
                }
                break;
        }
    }
    document.getElementById("score").innerHTML = playerScore + " : " + computerScore;
},500)
};


