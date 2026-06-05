window.addEventListener("load", addListeners)

function addListeners(){
    document.getElementById("strength").addEventListener("change", function(event){
        var strength = parseInt(document.getElementById("strength").value);
        if(isNaN(strength))
            document.getElementById("strDisplay").value = 0;
        else{
            document.getElementById("strDisplay").value = (strength * 25);
        }
        calcTotPower();
    });

    document.getElementById("speed").addEventListener("change", function(event){
        var speed = parseInt(document.getElementById("speed").value);
        if(isNaN(speed))
            document.getElementById("spdDisplay").value = 0;
        else{
            document.getElementById("spdDisplay").value = (speed * 10);
        }
        calcTotPower();
    });

    document.getElementById("energy").addEventListener("change", function(event){
        var energy = parseInt(document.getElementById("energy").value);
        if(isNaN(energy))
            document.getElementById("engDisplay").value = 0;
        else{
            document.getElementById("engDisplay").value = (energy * 40);
        }
        calcTotPower();
    });

    document.getElementById("showHeroSec").addEventListener("change", function(event){
        if(document.getElementById("showHeroSec").checked){
            document.getElementById("heroIdSection").style.display="block";
        }
        else{
            document.getElementById("heroIdSection").style.display="none";
        }
    });

    document.getElementById("showCivSec").addEventListener("change", function(event){
        if(document.getElementById("showCivSec").checked){
            document.getElementById("civIdSection").style.display="block";
        }
        else{
            document.getElementById("civIdSection").style.display="none";
        }
    });
}

function calcTotPower(){
    var totalPower = parseInt(document.getElementById("strDisplay").value) +
        parseInt(document.getElementById("spdDisplay").value) +
        parseInt(document.getElementById("engDisplay").value);
    document.getElementById("totPower").value = totalPower;
}