console.log("Game started press quit to exit the game !");

const fav_Movie = "war";
let guess = prompt("Guess my fav movie ...");
while (guess != fav_Movie && guess != "quit") {
  guess = prompt(" Wrong guess! Plz try Again");
}
if (guess == fav_Movie) {
  console.log("guess is correct ! you win");
} else {
  console.log("you Quit");
}

