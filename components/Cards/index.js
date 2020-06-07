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
const cardsContainer = document.querySelector(".cards-container");
const card = document.querySelector("card");
const author = document.createElement("div");

function cardMaker(object) {
  const headline = document.createElement("div");

  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  author.textContent = object;
  // headline.textContent = object;
  authorName.textContent = object.authorName;
  // headline.textContent = object.headline;
  image.textContent = object.authorPhoto;
  // authorName.textContent = object.authorName;

  // card.appendChild(headline);
  author.appendChild(authorName);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  return author;
}
// function cardMakerPlus() {
const axiosy = axios.get("https://lambda-times-backend.herokuapp.com/articles");

axiosy
  .then((response) => {
    // const
    const carder = response.data.articles;
    console.log(carder);
    const keys = Object.keys(carder);
    console.log(keys);
    keys.forEach((element) => {
      console.log(element);
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = element;
      cardsContainer.appendChild(card);
      console.log(cardsContainer);
    });

    let text = [];
    for (let key in carder) {
      text.push(carder[key]);
    }
    console.log(text);

    for (let i = 0; i < text.length; i++) {
      console.log(text[i]);
      const author = cardMaker(text[i]);
      text[i].forEach((element) => {
        console.log(element);
        const author = cardMaker(element);
        // const headline = cardMaker(element);
        //  const image = cardMaker(element);
        console.log(author);
        console.log(cardsContainer);
      });
    }
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

    // });
    // values.forEach((element) => {
    //   // console.log(element.authorName);
    //   // const card = cardMaker(element.authorName);
    //   // cardsContainer.append(card);
    //   // console.log(cardsContainer);
    // });

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
// return "Hello";
// }
// cardMakerPlus();
