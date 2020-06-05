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
    this.addresses = response.data.map((country) => country.name);
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
function cardMaker() {
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

  card.textContent = object;
}
// You can use `array.map` to take only the names like this:

//     axios.get('api_link', {})
//       .then((response) => {
//         this.addresses = response.data.map(country => country.name)
//       })
