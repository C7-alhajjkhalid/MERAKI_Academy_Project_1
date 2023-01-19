const body = document.querySelector("body");
const option = document.createElement("div");

const dataBase = [
  {
    id: 1,
    src: "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/442543",
  },
  {
    id: 2,
    src: "https://www.themoviedb.org/t/p/w500/n1KOcuMSdNHY0pewz6fEWl6zHYD.jpg",
  },
  {
    id: 3,
    src: "https://static.wikia.nocookie.net/pinkfloyd/images/f/ff/Syd.jpg/revision/latest/scale-to-width-down/220?cb=20161023183805",
  },
  {
    id: 4,
    src: "https://static.wikia.nocookie.net/electronicmusic/images/0/0d/Richard_Wright.jpeg",
  },
  {
    id: 5,
    src: "https://static.wikia.nocookie.net/pinkfloyd/images/3/33/Nick_Mason.jpg/revision/latest?cb=20161023180844",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
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

const shuffledDB1 = shuffle(dataBase);
const shuffledDB2 = shuffle(dataBase);

for (i = 0; i < shuffledDB1.length; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const place = document.querySelector("#playArea");
  img.src = shuffledDB1[i].src;
  img.id = shuffledDB1[1].id;

  img.style.height = "150px";
  img.style.width = "120px";
  div.style.height = "150px";
  div.style.width = "120px";
  div.style.border = "2px solid red";
  img.style.display = "none";
  div.append(img);
  place.append(div);
  div.addEventListener("click", (e) => {
    console.log(e.target);
  });
}

for (i = 0; i < shuffledDB2.length; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const place = document.querySelector("#playArea");
  img.src = shuffledDB2[i].src;
  img.id = shuffledDB2[i].id;

  div.style.height = "150px";
  div.style.width = "120px";
  img.style.height = "150px";
  img.style.width = "120px";
  img.style.display = "none";
  div.style.border = "2px solid red";
  div.append(img);
  place.append(div);
  div.addEventListener("click", (e) => {
    console.log(e.target);
  });
}

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
