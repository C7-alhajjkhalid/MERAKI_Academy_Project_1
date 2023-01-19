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
    src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Felectronicmusic.fandom.com%2Fwiki%2FWright%2C_Richard&psig=AOvVaw3dpzlqp0KzwkvAw3CWtSXW&ust=1674210603243000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiPzLy20_wCFQAAAAAdAAAAABAJ",
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
for (i = 0; i < 12; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const place = document.querySelector("#playArea");
  img.src =
    "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png";
  img.style.height = "150px";
  img.style.width = "120px";
  place.append(img);
}


const array1 = [1, 2, 3, 4, 5, 6];

