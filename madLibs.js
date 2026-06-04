function madLibs(){
    var word1= document.getElementById("lib1").value;
    var word2= document.getElementById("lib2").value;
    var word3= document.getElementById("lib3").value;
    var word4= document.getElementById("lib4").value;
    var word5= document.getElementById("lib5").value;
    var word6= document.getElementById("lib6").value;
    var word7= document.getElementById("lib7").value;
    var word8= document.getElementById("lib8").value;

    document.getElementById("madLib").innerHTML = 
        "Once upon a time there was a bub named <span>" + word1 + "</span>. " +
        "<span>" + word1 + "</span> was a hard worker who loved to read, to " + 
        "write, and to <span>" + word2 + "</span>. <span>" + word1 + "</span>"
        + " would <span>" + word2 + "</span> for hours and hours until one day"
        + " until they couldn't <span>" + word2 + "</span> any more. Every time"
        + " they tried they felt too <span>" + word3 + "</span>. <br><br>"

        + "<span>" + word1 + "</span> tried to <span>" + word4 + "</span> their "
        + " problem, but a big <span>" + word5 + "</span> always stopped them. " 
        + "<span>" + word1 + "</span> decided they needed a professional, so "
        + "they called <span>" + word6 + "</span> and asked what they should do. "
        + "<span>" + word6 + "</span> thought for a moment and replied &#147;<span>"
         + word7 + "</span> your <span> " + word8 + "</span>.&#148;";
}


