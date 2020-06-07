// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    const carder = response.data.articles;
    console.log(carder);
    const keys = Object.entries(carder);
    for (let i = 0; i < keys.length; i++) {
      console.log(keys);
      console.log(keys[i]);
      for (let j = 0; j < keys[i][1].length; j++) {
        console.log(keys[i][1].length);
        console.log(keys[i][1][j]);
        cardsContainer = document.querySelector(".cards-container");
        const cards = cardMaker(keys[i][1][j]);
        cardsContainer.appendChild(cards);
        console.log(".cards-container");
      }
    }

    console.log(
      "the response from the API, organized for us by axios",
      response.data
    );
  })
  .catch((error) => {
    console.log(
      "something went wrong, hopefully the error tells us what",
      error
    );
  });

function cardMaker(object) {
  const card = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");
  const author = document.createElement("div");
  const headline = document.createElement("div");

  author.classList.add("author");
  headline.classList.add("headline");
  imageContainer.classList.add("img-container");
  card.classList.add("card");

  headline.textContent = object.headline;
  authorName.textContent = object.authorName;
  image.src = object.authorPhoto;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(authorName);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  return card;
}

// keys.forEach((element) => {
//   console.log(element);
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.textContent = element;
//   cardsContainer.appendChild(card);
//   console.log(cardsContainer);

// });

//   for (let n = 0; n < keys[i].length; i++) {
//     console.log(keys[i][1]);
//     // const headline = document.createElement("div");
//     // headline.classList.add("headline");
//     // headline.textContent = obj[n][i].headline;
//     // card.appendChild(headline);
//     // console.log(card);
//   }
// }

// console.log(keys[i][0].length);

// //  const image = cardMaker(element);
// console.log(author);
// console.log(cardsContainer);

// let text = [];
// for (let key in carder) {
//   text.push(carder[key]);
// }
// console.log(text.length);

// for (let i = 0; i < text.length; i++) {
//   console.log(text[i].length);

//   text[i].forEach((element) => {
//     console.log(element);

//   });
// }
// text1.forEach((element) => {
//   console.log(element);
// });

//   // const card = cardMaker(carder);
//   // console.log(card);
// }
// let { javascipt, bootstrap, technology, jquery, node } = carder;

// keys.forEach((element) => {
//   console.log(element);
//   const card = cardMaker(element);
