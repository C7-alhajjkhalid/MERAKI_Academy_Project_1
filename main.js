// We will start by defining the elements we will use in the document
const body = document.querySelector("body");
const failedCounter = document.createElement("h1");
const winningCounter = document.createElement("h1");
failedCounter.style.color = "red";
winningCounter.style.color = "green";
failedCounter.style.fontSize = "20px";
winningCounter.style.fontSize = "20px";
let wrongSound = new Audio("wrong.wav");
let correctSound = new Audio("correct.wav");
let BGMusic = new Audio("HighHopes.mp3");
const winChild = document.querySelector("#winChild");
const loseChild = document.querySelector("#loseChild");
const place = document.querySelector("#playArea");
let imagesIds = [];

// This function takes an html tag and hides it
const hideCard = (x) => {
  x.style.display = "none";
};

// This function reverses the previous function by showing the passed html tag
const showCard = (x) => {
  x.style.display = "inline";
};

// The database below contains the memory card images and id numbers
const dataBase = [
  {
    id: 1,
    src: "https://images2.imgbox.com/a5/98/gq9g8uJC_o.jpg",
  },
  {
    id: 2,
    src: "https://images2.imgbox.com/22/4d/44q0aFBi_o.jpg",
  },
  {
    id: 3,
    src: "https://images2.imgbox.com/4f/23/RYOpxvBY_o.jpg",
  },
  {
    id: 4,
    src: "https://images2.imgbox.com/7f/79/G9LiQYCC_o.jpg",
  },
  {
    id: 5,
    src: "https://images2.imgbox.com/04/57/KT0v3P9y_o.jpg",
  },
  {
    id: 6,
    src: "https://images2.imgbox.com/bf/d8/FjtbQ8ZN_o.jpg",
  },
];

// This function purpose is to loop over the array and shuffle the items using the Fisher-Yates Algorithm... it replaces each item in the array with another item that holds a random index number using the math.random
const shuffle = (array) => {
  for (i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];

    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

//shuffledDBFinal is an array that contains the database repeated twice and shuffled using the shuffle function that we created earlier
const shuffledDBFinal = shuffle([...dataBase, ...dataBase]);

//Below is the introduction section that contains a small brief about the game and how to play

const fixedDiv = document.createElement("div");
fixedDiv.classList.add("wlecomeDiv");
fixedDiv.style.border = "solid #264653 10px";
fixedDiv.style.borderRadius = "5%";
fixedDiv.style.width = "600px";
fixedDiv.style.height = "650px";
fixedDiv.style.position = "fixed";
fixedDiv.style.backgroundColor = "#f4a261";
fixedDiv.style.top = "50%";
fixedDiv.style.left = "50%";
fixedDiv.style.transform = "translate(-50%, -50%)";
fixedDiv.style.display = "flex";
fixedDiv.style.flexDirection = "column";
fixedDiv.style.justifyContent = "center";

const wlcmP = document.createElement("p");
wlcmP.innerText =
  "Introducing a fun and unique card game that combines HTML, JavaScript, and CSS - the Pink Floyd Album Cover Matching Game! In this game, you'll be challenged to match pink floyd album covers hidden behind cards. The game is easy to play, but with a fun twist that makes it challenging and exciting. To play, simply click on two cards at a time to reveal the album covers. If the covers match, they will remain face up and you'll earn points. If the covers don't match, they will be flipped back over and you'll need to try again. The objective is to match all the cards as quickly as possible, with the least amount of clicks to earn the most points. The game is over when all cards are matched. Good luck and have fun!";
wlcmP.style.color = "#264653";
wlcmP.style.fontFamily = "font-family: 'Roboto', sans-serif;";
wlcmP.style.fontSize = "25px";
wlcmP.style.width = "540px";
wlcmP.style.textAlign = "center";
wlcmP.style.alignSelf = "center";

const wlcmSkipBtn = document.createElement("button");
wlcmSkipBtn.innerText = "Play Game!";
wlcmSkipBtn.style.width = "300px";
wlcmSkipBtn.style.alignSelf = "center";
wlcmSkipBtn.style.fontSize = "25px";
wlcmSkipBtn.style.color = "#264653";
wlcmSkipBtn.style.fontFamily = "font-family: 'Roboto', sans-serif;";

body.append(fixedDiv);
fixedDiv.append(wlcmP);
fixedDiv.append(wlcmSkipBtn);

wlcmSkipBtn.addEventListener("click", (e) => {
  fixedDiv.remove();
});

//Using closures, firstC allows us to access the value of the first clicked div using if statement
let firstC = 0;
//counter allows us to count how many times the user attempted to reveal cards
let fCounter = 0;
let wCounter = 0;

//Now we need to loop over the final shuffled array and display them in the #playArea grid that we created in html
for (i = 0; i < shuffledDBFinal.length; i++) {
  const div = document.createElement("div");

  const img = document.createElement("img");

  img.src = shuffledDBFinal[i].src;
  img.id = shuffledDBFinal[i].id;

  img.style.height = "150px";
  img.style.width = "120px";
  div.style.height = "150px";
  div.style.width = "120px";
  div.style.border = "2px solid #F4A261";
  div.style.borderRadius = "5%";

  div.style.backgroundImage = "url(https://i.imgur.com/PSPlwuw.png)";
  div.style.backgroundColor = "#E76F51";
  div.style.backgroundSize = "cover";
  div.style.backgroundRepeat = "no-repeat";
  div.id = `child${i + 1}`;
  div.classList.add("divCard");
  img.classList.add("imgCard");

  img.style.display = "none";
  img.style.borderRadius = "5%";
  div.append(img);
  place.append(div);
  loseChild.style.textAlign = "center";
  winChild.style.textAlign = "center";
  loseChild.append(failedCounter);
  winChild.append(winningCounter);
  div.addEventListener("click", (e) => {
    //This is the first card that the user opens
    showCard(img);

    if (firstC === 0) {
      firstC = img.id;
      firstDiv = div.id;
      e.target.style.pointerEvents = "none";

      setTimeout(() => {
        e.target.style.pointerEvents = "auto";
      }, 2000);
    } else {
      // This case is when 2 cards result is a match
      if (firstC === img.id) {
        // Correct sound will be played
        correctSound.play();
        // The win counter will increase by 1 increment
        wCounter++;
        //The counter value will be reflected on the page
        winningCounter.innerText = `Correct attempts: ${wCounter}`;
        // This case is when the cards don't match each other
        if (wCounter === 6) {
          const resultPage = document.createElement("div");
          resultPage.style.borderRadius = "5%";
          resultPage.style.border = "solid #264653 3px";
          resultPage.style.width = "600px";
          resultPage.style.height = "650px";
          resultPage.style.position = "fixed";
          resultPage.style.backgroundColor = "#f4a261";
          resultPage.style.top = "50%";
          resultPage.style.left = "50%";
          resultPage.style.transform = "translate(-50%, -50%)";
          resultPage.style.display = "flex";
          resultPage.style.flexDirection = "column";
          resultPage.style.justifyContent = "center";
          body.append(resultPage);
          const resultText = document.createElement("h1");
          resultText.innerText = `You Won!! It took you ${fCounter} attempts to figure it out`;
          resultText.style.fontSize = "40px";
          resultText.style.textAlign = "center";
          resultText.style.textAlign = "center";
          resultText.style.alignSelf = "center";
          resultText.style.color = "black";
          resultPage.append(resultText);
        }
      } else {
        // Wrong soundtrack will be played
        wrongSound.play();
        // Below CSS property will prohibit any clicks on the #playArea so users can't cheat
        place.style.pointerEvents = "none";
        e.target.style.pointerEvents = "none";
        // The lose counter will increase by 1 increment
        fCounter++;
        //The counter value will be reflected on the page
        failedCounter.innerText = `Failed attempts: ${fCounter}`;
        // Below temp will hold the value of the first card in order to hide it later
        const temp = document
          .querySelector("#" + firstDiv)
          .querySelector("img");
        //The timer will use the hide card function in order to hide the first and second card and return the state of pointerEvents to auto so the user can try again
        setTimeout(() => {
          hideCard(temp);
          hideCard(img);
          place.style.pointerEvents = "auto";
          e.target.style.pointerEvents = "auto";
        }, 2000);
      }
      // The value of first card will change back to 0 when the cards match or don't match
      firstC = 0;
    }
  });
}

const btn = document.querySelector("#restartBtn");
btn.addEventListener("click", (e) => {
  location.reload();
});

const musicBtn = document.querySelector("#musicBtn");

musicBtn.addEventListener("click", (e) => {
  BGMusic.play();
});
