// const arr = [];

// for (let i = 0; i < 5; i++) {
//   var n = parseInt(prompt("enter a number :"));
//   var sqr = n * n;
//   arr.push(sqr);
// }
// document.write(arr + "<br>");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 10 == 0) {
//     document.write(arr[i]);
//   }
// }

//CREATING A GAME OF GUESSING NUMBER

var randomNumber = parseInt(Math.random() * 20);
var text = document.getElementById("txt");
// document.write(randomNumber);
var count = 0;
document.getElementById("btn").addEventListener("click", () => {
  var input = text.value;

  if (count < 7) {
    document.getElementById("count").innerHTML = `You have only ${
      6 - count
    } chances left`;
    if (randomNumber == input) {
      document.getElementById("head").innerHTML =
        "Congrats! You have choosen the right nmber";
      document.getElementById("head").style.color = "green";
      var result = 20 - count;
      document.getElementById(
        "head2"
      ).innerHTML = `You got ${result} score out of 20`;
      document.getElementById("win").style.display = "block";
      document.getElementById("lost").style.display = "none";
      document.getElementById("count").style.display = "none";
      document.getElementById("borderResult").style.display = "block";

      var winG = new Audio("mixkit-male-voice-cheer-victory-2011.wav");
      winG.play();
    } else if (randomNumber > input) {
      count++;

      document.getElementById("head").innerHTML =
        "Oops! guessed number is smaller";
      document.getElementById("head").style.color = "red";
      document.getElementById("lost").style.display = "block";
      document.getElementById("borderResult").style.display = "block";
      var loseG = new Audio("mixkit-retro-game-notification-212.wav");
      loseG.play();
    } else {
      count++;

      document.getElementById("head").innerHTML =
        "Oops! guessed number is larger";
      document.getElementById("head").style.color = "red";
      document.getElementById("lost").style.display = "block";
      document.getElementById("borderResult").style.display = "block";
      loseG.play();
    }
  }
});
