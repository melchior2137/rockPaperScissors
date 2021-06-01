let itemIndex = 1; // default Player item
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
    document.getElementById("playerItem").innerHTML = items[itemIndex];
}
function prevItem() {
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = 2;
    }
    document.getElementById("playerItem").innerHTML = items[itemIndex];
}
function play(playerItem) {                     //main game function
    cpuIndex = cpuIndexGen(0, 3);
    document.getElementById("cpuItem").innerHTML = items[cpuIndex];
    setTimeout(function(){
        if (cpuIndex == playerItem) {
        alert("DRAW");
    }
    else{
        switch(cpuIndex){
            case 0:
                if(playerItem==1){
                    alert("WIN");
                }
                else{
                    alert("LOSE");
                }
                break;
            case 1:
                if(playerItem==2){
                    alert("WIN");
                }
                else{
                    alert("LOSE");
                }
                break;
            case 2:
                if(playerItem==0){
                    alert("WIN");
                }
                else{
                    alert("LOSE");
                }
                break;
        }
    }
},35)
};