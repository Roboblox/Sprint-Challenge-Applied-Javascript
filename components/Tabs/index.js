// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// tab creation function
function tabMaker(object) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = object;

  return tab;
}

//function that gets data and puts it in the tabMaker function
function topicMaker() {
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((response) => {
      const topics = document.querySelector(".topics");
      const tab = response.data.topics;
      tab.forEach((element) => {
        const topic = tabMaker(element);
        topics.appendChild(topic);
      });
    })
    .catch((error) => {
      console.log(
        "something went wrong, hopefully the error tells us what",
        error
      );
    });
}
// function call
topicMaker();
