// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then((response) => {
//     console.log(
//       "the response from the API, organized for us by axios",
//       response.data
//     );
//   })
//   .catch((error) => {
//     console.log(
//       "something went wrong, hopefully the error tells us what",
//       error
//     );
//   });
// function tabMaker(object) {
//   const tab = document.createElement("div");

//   tab.classList.add("tab");

//   tab.textContent = object.topics;

//   //   document.querySelector(".topics").appendChild(tab);

//   return tab;
// }
axios
  .get("https://lambda-times-backend.herokuapp.com/topics/")
  .then((response) => {
    this.tab = response.data.map(function (item) {
      console.log(item);
    });

    // let topic = tabMaker(reponse.data);
    // console.log(topic);
    // document.querySelector(".topics").appendChild(topic);

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
// let topics = axios
//   .get(element)
//   .then((response) => {
//     for (let i = 0; i < 5; i++) {
//       tab = tabMaker(response.data);
//       document.querySelector(".topics").appendChild(tab);
//       return tab;
//     }
//     console.log(
//       "the response from the API, organized for us by axios",
//       response.data
//     );
//   })
//   .catch((error) => {
//     console.log(
//       "something went wrong, hopefully the error tells us what",
//       error
//     );
//   });
// axios
//   .get(element)
//   .then((response) => {
//     for (let i = 0; i < 5; i++) {
//       tab = tabMaker(response.data);
//       document.querySelector(".topics").appendChild(tab);
//       return tab;
//     }
//     console.log(
//       "the response from the API, organized for us by axios",
//       response.data
//     );
//   })
//   .catch((error) => {
//     console.log(
//       "something went wrong, hopefully the error tells us what",
//       error
//     );
//   });
// console.log(topics);
