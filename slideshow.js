var index = 0;
var timer;
var pictureArray = [
    "resources/batman.webp",
    "resources/Alfred.webp",
    "resources/Batgirl.webp",
    "resources/Batman_29.webp",
    "resources/Joker_ROTJ.webp",
    "resources/Nightwing.webp"
];
var captionArray = [
    "Batman",
    "Alfred",
    "Batgirl",
    "Terry McGinnis",
    "Joker",
    "Nightwing"
];

window.addEventListener("load", loadEventListener);

function loadEventListener(){
    document.getElementById("next").addEventListener("click", nextFunct);
    document.getElementById("previousButton").addEventListener("click", 
        previousFunction);
    document.getElementById("playButton").addEventListener("click", playFunction);
    document.getElementById("pauseButton").addEventListener("click", pauseFunction);



}

function nextFunct(){
    if(index < pictureArray.length -1)
        index++;
    else
        index = 0;
    document.getElementById("slidepic").src = pictureArray[index];
    document.getElementById("caption").innerHTML = captionArray[index];

}

function previousFunction(){
    if(index == 0)
        index = pictureArray.length-1;
    else
        index--;
    document.getElementById("slidepic").src = pictureArray[index];
    document.getElementById("caption").innerHTML = captionArray[index];
}

function playFunction(){
    clearInterval(timer);
    timer = setInterval(nextFunct, 1000);
}

function pauseFunction(){
    clearInterval(timer);
}