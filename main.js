const body = document.querySelector("body");
const option = document.createElement("div");
const failedCounter = document.createElement("h1");
const winningCounter = document.createElement("h1");
failedCounter.style.color = "red";
winningCounter.style.color = "green";
let wrongSound = new Audio("wrong.wav");
let correctSound = new Audio("correct.mp3");

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
  body.append(failedCounter);
  body.append(winningCounter);
  div.addEventListener("click", (e) => {
    showCard(img);
    console.log(img.id);
    console.log(div.id);

    if (firstC === 0) {
      firstC = img.id;
      firstDiv = div.id;
    } else {
      if (firstC === img.id) {
        correctSound.play();
        console.log("Match!");
        wCounter++;
        winningCounter.innerText = wCounter;
      } else {
        wrongSound.play();
        console.log("No match.");
        fCounter++;
        failedCounter.innerText = fCounter;

        const temp = document
          .querySelector("#" + firstDiv)
          .querySelector("img");

        setTimeout(() => {
          hideCard(temp);
          hideCard(img);
        }, 1000);
      }
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

// for (i = 0; i < 12; i++) {
//   const div = document.createElement("div");
//   const place = document.querySelector("#playArea");

//   div.style.height = "150px";
//   div.style.width = "120px";
//   div.style.backgroundColor = "darkgray";
//   div.style.borderRadius = "10%";
//   div.style.position = "absolute";
//   place.append(div);
// }
