var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
const crash = new Audio();
crash.src = "sounds/crash.mp3";

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case "x":
      kick.play();
      break;
    case "z":
      crash.play();
      break;
    case "c":
      snare.play();
      break;
    case "v":
      tom1.play();
      break;
    case "b":
      tom2.play();
      break;
    case "n":
      tom3.play();
      break;
    case "m":
      tom4.play();
      break;
    default:
      alert("Pressed Wrong Key");
  }
}

function animation(key) {
  var act = document.querySelector("." + key);
  act.classList.add("press");
  setTimeout(function() {
    act.classList.remove("press")
  }, 200);
}
