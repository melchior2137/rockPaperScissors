let itemIndex = 1; // default Player item
let bodyElement = document.querySelector("html"); 
let computerScore=0;
let playerScore=0;

//array of items
items = ["ROCK", "PAPER", "SCISSORS"]

//array of photos

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'img/paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'img/scissors.png';

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
        { transform: 'translate(-50px)' },

      ], {
        // timing options
        duration: 50,
        iterations: 1
      });

      document.getElementById("playerImage").animate([
        // keyframes
        { transform: 'translate(-50px)' },

      ], {
        // timing options
        duration: 50,
        iterations: 1
      });

      setTimeout(function(){
      document.getElementById("playerItem").innerHTML = items[itemIndex];
      document.getElementById("playerImage").src = imgArray[itemIndex].src;
      },50)
}
function prevItem() {
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = 2;
    }
    document.getElementById("playerItem").animate([
        // keyframes
        { transform: 'translate(50px)' },
      ], {
        // timing options
        duration: 50,
        iterations: 1
      });

      document.getElementById("playerImage").animate([
        // keyframes
        { transform: 'translate(50px)' },
      ], {
        // timing options
        duration: 50,
        iterations: 1
      });
      setTimeout(function(){
      document.getElementById("playerItem").innerHTML = items[itemIndex];
      document.getElementById("playerImage").src = imgArray[itemIndex].src;
      },50)
}
function play(playerItem) {                     //main game function
    cpuIndex = cpuIndexGen(0, 3);               //random value from 0 to 2
    document.getElementById("cpuItem").classList.remove("blinking"); //delete class with blinking animation
    document.getElementById("cpuItem").animate([
        // keyframes
        { transform: 'rotate(360deg)' },
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });

      document.getElementById("cpuImage").animate([
        // keyframes
        { transform: 'rotate(360deg)' },
      ], {
        // timing options
        duration: 400,
        iterations: 1
      });
      setTimeout(function(){
      document.getElementById("cpuItem").innerHTML = items[cpuIndex];
      document.getElementById("cpuImage").src = imgArray[cpuIndex].src;
      },400)
      

    
    setTimeout(function(){
        if (cpuIndex == playerItem) {
        bodyElement.style.border = "25px solid #F4DD0F";
        document.getElementById("score-info").innerHTML ="YOU DRAW!";
        playerScore++;
        computerScore++;
    }
    else{
        switch(cpuIndex){
            case 0:
                if(playerItem==1){
                    bodyElement.style.border = "25px solid #44E179";
                    document.getElementById("score-info").innerHTML ="YOU WON!";
                    playerScore++;
                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    document.getElementById("score-info").innerHTML ="YOU LOST!";
                    computerScore++;

                }
                break;
            case 1:
                if(playerItem==2){
                    bodyElement.style.border = "25px solid #44E179";
                    document.getElementById("score-info").innerHTML ="YOU WON!";
                    playerScore++;

                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    document.getElementById("score-info").innerHTML ="YOU LOST!";
                    computerScore++;

                }
                break;
            case 2:
                if(playerItem==0){
                    bodyElement.style.border = "25px solid #44E179";
                    document.getElementById("score-info").innerHTML ="YOU WON!";
                    playerScore++;

                }
                else{
                    bodyElement.style.border = "25px solid #E14444";
                    document.getElementById("score-info").innerHTML ="YOU LOST!";
                    computerScore++;
                }
                break;
        }
    }
    document.getElementById("score").innerHTML = playerScore + " : " + computerScore;
},400)
};


