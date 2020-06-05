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
function cardMaker(object) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  // card.textContent = object;
  // headline.textContent = object;
  authorName.textContent = object.authorName;
  // card.appendChild(headline);
  card.appendChild(authorName);
  return card;
}
function cardMakerPlus() {
  const axiosy = axios.get(
    "https://lambda-times-backend.herokuapp.com/articles"
  );

  axiosy
    .then((response) => {
      // const
      const carder = response.data.articles.javascript;

      // console.log(carder.javascript[1].authorName);
      console.log(carder);
      // let { javascipt, bootstrap, technology, jquery, node } = carder;
      // console.log(carder);

      carder1 = Object.entries(response.data.articles.javascript);
      console.log(carder1);
      for (let prop in carder1) {
        console.log(carder1[prop]);
      }

      carder.forEach((element) => {
        console.log("Hello");
        console.log(element);

        const card = cardMaker(element);
        const card2 = response.data.articles[0];

        cardsContainer.appendChild(card);
        console.log(cardsContainer);
      });

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
  return "Hello";
}
cardMakerPlus();
