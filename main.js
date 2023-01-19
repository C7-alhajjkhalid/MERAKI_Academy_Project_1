const body = document.querySelector("body");
const option = document.createElement("div");

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
  div.style.border = "2px solid red";
  div.style.borderRadius = "10%";

  div.style.backgroundColor = "darkgray";

  img.style.display = "none";
  img.style.borderRadius = "10%";
  div.append(img);
  place.append(div);
  div.addEventListener("click", (e) => {
    img.style.display = "inline";
    console.log(img.id);
    console.log(e.target);
  });
}

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
