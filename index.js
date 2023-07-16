alert("Put your headphone before clicking to hear the beats mates!!");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// button pressed
function handleClick() {
  this.style.color = "green";
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

// key pressed

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "K":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "M":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "E":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "S":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "H":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "!":
      var kickbase = new Audio("./sounds/breaking_bad.mp3");
      kickbase.play();
      alert("You're goddamn RIGHT!!!");
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

// adding animation like structure to our buttons

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
