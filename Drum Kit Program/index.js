var numberOfDrums = document.querySelectorAll(".drum").length;

//button press
for (var i = 0; i<numberOfDrums; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInner = this.innerHTML;
        sound(buttonInner);
        buttonAnimation(buttonInner);

    });
}

//keyboard press
document.addEventListener("keypress", function(event){
    console.log(event.key)
    sound(event.key);
    buttonAnimation(event.key)

});

//creating sound code
function sound(key){
    switch(key){
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default:
            console.log(this.innerHTML);
    }
}


function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}