//arrays of musicians name
const names = [
  "Beyonce",
  "Eminem",
  "Ludacris",
  "Shakira",
  "Nelly",
  "Rihanna",
  "Outkast",
  "Coldplay",
  "Adele",
  "Drake",
  "Usher",
  "Ashanti",
  "Timbaland",
  "Daughtry",
  "Maxwell"
];

let wordLetters = document.getElementById("currentWord");
let wrongletter = document.getElementById("wrongLetters");
let GuessRemains = document.getElementById("remainingGuess");
let correctWords = document.getElementById("totalWins");
let wrongWords = document.getElementById("totalLoss");
let musicianImg = document.getElementById("image");
let maxLives = 12;
let letterDash;
let incorrectLetter;
let rightLetter;
let wins = 0;
let losses = 0;
let start = document.getElementById("startGame");
start.textContent = "Begin by pressing any key";
//game
//game function{
function celebrityGame() {
  letterDash = [];
  incorrectLetter = [];
  maxLives = 12;
  computerRandPick = names[
    Math.floor(Math.random() * names.length)
  ].toLowerCase();
  chosenWord = computerRandPick.split("");

  for (var i = 0; i < chosenWord.length; i++) {
    letterDash[i] = "_";
  }
  wordLetters.textContent = letterDash.join(" ");
  wrongletter.textContent = "Wrong Letters: ";
  GuessRemains.textContent = "Lives left: " + maxLives;
  correctWords.textContent = "Wins: " + wins;
  wrongWords.textContent = "Losses: " + losses;
  beginGame();
}

// //images

function celebImage() {
  console.log(computerRandPick);
  console.log(musicianImg);
  console.log(names);
  if (computerRandPick === names[0].toLowerCase()) {
    musicianImg.src = "./assets/images/beyonce.jpg";
  } else if (computerRandPick === names[1].toLowerCase()) {
    musicianImg.src = "./assets/images/eminem.jpg";
  } else if (computerRandPick === names[2].toLowerCase()) {
    musicianImg.src = "./assets/images/Ludacris.jpg";
  } else if (computerRandPick === names[3].toLowerCase()) {
    musicianImg.src = "./assets/images/shakira.jpg";
  } else if (computerRandPick === names[4].toLowerCase()) {
    musicianImg.src = "./assets/images/nelly.jpg";
  } else if (computerRandPick === names[5].toLowerCase()) {
    musicianImg.src = "./assets/images/Rihanna.jpg";
  } else if (computerRandPick === names[6].toLowerCase()) {
    musicianImg.src = "./assets/images/outkast.jpg";
  } else if (computerRandPick === names[7].toLowerCase()) {
    musicianImg.src = "./assets/images/coldplay-group.png";
  } else if (computerRandPick === names[8].toLowerCase()) {
    musicianImg.src = "./assets/images/adele.jpg";
  } else if (computerRandPick === names[9].toLowerCase()) {
    musicianImg.src = "./assets/images/drake.jpg";
  } else if (computerRandPick === names[10].toLowerCase()) {
    musicianImg.src = "./assets/images/usher.png";
  } else if (computerRandPick === names[11].toLowerCase()) {
    musicianImg.src = "./assets/images/ashanti.jpg";
  } else if (computerRandPick === names[12].toLowerCase()) {
    musicianImg.src = "./assets/images/timbaland.png";
  } else if (computerRandPick === names[13].toLowerCase()) {
    musicianImg.src = "./assets/images/daughtry.jpg";
  } else if (computerRandPick === names[14]) {
    musicianImg.src = "./assets/images/maxwell.jpg";
  }
}

function beginGame() {
  document.onkeyup = function(event) {
    let userGuess = event.key;
    start.textContent = "";

    rightLetter = chosenWord.includes(userGuess);
    if (rightLetter) {
      for (var j = 0; j < computerRandPick.length; j++) {
        var comPick = computerRandPick[j];
        if (comPick === userGuess) letterDash[j] = comPick;
        wordLetters.textContent = letterDash.join(" ");
        score();
      }
    } else if (incorrectLetter.indexOf(userGuess) === -1) {
      incorrectLetter.push(userGuess);
      maxLives--;
      score();
    }

    wrongletter.textContent = "wrong letters:  " + incorrectLetter.toString();
    GuessRemains.textContent = "lives remaining: " + maxLives;
  };
}

function score() {
  if (chosenWord.toString() === letterDash.toString()) {
    wins++;
    celebImage();
    start.textContent = `Congratulations you got ${computerRandPick} right!!!`;

    celebrityGame();
  } else if (maxLives === 0) {
    losses++;
    celebImage();
    start.textContent = `Sorry, you got ${computerRandPick} wrong`;

    celebrityGame();
  }
}

celebrityGame();
score();
