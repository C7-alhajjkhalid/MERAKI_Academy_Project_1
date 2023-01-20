const body = document.querySelector("body");
const option = document.createElement("div");
const failedCounter = document.createElement("h1");
const winningCounter = document.createElement("h1");
failedCounter.style.color = "red";
winningCounter.style.color = "green";
failedCounter.style.fontSize = "50px";
winningCounter.style.fontSize = "50px";
let wrongSound = new Audio("wrong.wav");
let correctSound = new Audio("correct.wav");
let BGMusic = new Audio("HighHopes.mp3");
const winChild = document.querySelector("#winChild")
const loseChild = document.querySelector("#loseChild")
const hideCard = (x) => {
  x.style.display = "none";
};

const showCard = (x) => {
  x.style.display = "inline";
};

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

//Using closures, firstC allows us to access the value of the first clicked div using if statement
let firstC = 0;
//Using closures, counter allows us to count how many times the user attempted to reveal cards
let fCounter = 0;
let wCounter = 0;
//Now we need to loop over the final shuffled array and display them in the #playArea grid that we created in html

for (i = 0; i < shuffledDBFinal.length; i++) {
  const div = document.createElement("div");

  const img = document.createElement("img");
  const place = document.querySelector("#playArea");
  img.src = shuffledDBFinal[i].src;
  img.id = shuffledDBFinal[i].id;

  img.style.height = "150px";
  img.style.width = "120px";
  div.style.height = "150px";
  div.style.width = "120px";
  div.style.border = "2px solid #F4A261";
  div.style.borderRadius = "10%";

  div.style.backgroundColor = "#E76F51";
  div.id = `child${i + 1}`;
  div.classList.add("divCard");
  img.classList.add("imgCard");

  img.style.display = "none";
  img.style.borderRadius = "10%";
  div.append(img);
  place.append(div);
  loseChild.style.textAlign = "center"
  winChild.style.textAlign = "center"
  loseChild.append(failedCounter);
  winChild.append(winningCounter);
  div.addEventListener("click", (e) => {
    showCard(img);
    if (firstC === 0) {
      firstC = img.id;
      firstDiv = div.id;
    } else {
      // This case is when 2 cards result is a match
      if (firstC === img.id) {
        // Correct sound will be played
        correctSound.play();
        // The win counter will increase by 1 increment 
        wCounter++;
        //The counter value will be reflected on the page
        winningCounter.innerText = wCounter;
        // This case is when the cards don't match each other
        if (wCounter === 6) {
          alert("You won!!");
        }
      } else {
        // Wrong soundtrack will be played
        wrongSound.play();
        // Below CSS property will prohibit any clicks on the #playArea so users can't cheat
        place.style.pointerEvents = "none";
        // The lose counter will increase by 1 increment
        fCounter++;
         //The counter value will be reflected on the page
        failedCounter.innerText = fCounter;
        // Below temp will hold the value of the first card in order to hide it later 
        const temp = document
          .querySelector("#" + firstDiv)
          .querySelector("img");
        //The timer will use the hide card function in order to hide the first and second card and return the state of pointerEvents to auto so the user can try again
        setTimeout(() => {
          hideCard(temp);
          hideCard(img);
          place.style.pointerEvents = "auto";
        }, 2000);
      }
      // The value of first card will change back to 0 when the cards match or don't match
      firstC = 0;
    }
  });
 
}

const sqr1 = document.querySelector("#child1");
const sqr2 = document.querySelector("#child2");
const sqr3 = document.querySelector("#child3");
const sqr4 = document.querySelector("#child4");
const sqr5 = document.querySelector("#child5");
const sqr6 = document.querySelector("#child6");
const sqr7 = document.querySelector("#child7");
const sqr8 = document.querySelector("#child8");
const sqr9 = document.querySelector("#child9");
const sqr10 = document.querySelector("#child10");
const sqr11 = document.querySelector("#child11");
const sqr12 = document.querySelector("#child12");

const btn = document.querySelector("#restartBtn");
btn.addEventListener("click", (e) => {
  location.reload();
});

const musicBtn = document.querySelector("#musicBtn")


musicBtn.addEventListener("click", (e) => {
  BGMusic.play()
});




