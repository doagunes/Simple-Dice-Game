
   
        var diceNumber = Math.random() * 6;
        diceNumber = Math.floor(diceNumber) + 1;
    
        var dice2Number = Math.random() * 6;
        dice2Number = Math.floor(dice2Number) + 1;
    
        document.querySelector("#dice1").setAttribute("src", "./dice" + diceNumber + ".png")
        document.querySelector("#dice2").setAttribute("src", "./dice" + dice2Number + ".png")
        
    
        if(diceNumber > dice2Number){
            document.querySelector("h1").innerHTML = "☝🏻 Player 1 wins!";
            
        }else if(diceNumber < dice2Number){
            document.querySelector("h1").innerHTML = "✌🏻 Player 2 wins!";
        
        }else{
            document.querySelector("h1").innerHTML = "🤞🏻 Draw!";
        }

        document.querySelector(".refButton").addEventListener("click", function refreshPage(){
            window.location.reload();
        } )

        
        var activeButton = document.querySelector(".refButton");
        activeButton.classList.add("pressed");
        
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 150);
        
    



