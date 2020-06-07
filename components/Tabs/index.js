// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector(".topics");
function tabMaker(object) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = object;

  return tab;
}
function topicMaker() {
  const thePromise = axios.get(
    "https://lambda-times-backend.herokuapp.com/topics"
  );

  thePromise
    .then((response) => {
      const tab = response.data.topics;
      tab.forEach((element) => {
        const topic = tabMaker(element);
        topics.appendChild(topic);
      });

      // console.log(
      //   "the response from the API, organized for us by axios",
      //   response.data.topics
      // );
    })
    .catch((error) => {
      console.log(
        "something went wrong, hopefully the error tells us what",
        error
      );
    });
}
topicMaker();
