import {
  renderLandingPage,
  renderContactPage,
  renderMenu
} from "./event-listeners";

//DOM manipulating module
export const DOMfunctions = (() => {
  function createButtons() {
    const contentContainer = document.getElementById("content");
    // create buttons
    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let contactButton = document.createElement("button");

    // create buttons container and set its id for css styling
    let buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons-container";

    // add ids to buttons
    homeButton.id = "home";
    menuButton.id = "menu";
    contactButton.id = "contact";

    // add class to buttons
    homeButton.classList.add("buttons");
    menuButton.classList.add("buttons");
    contactButton.classList.add("buttons");

    //add images to each button
    let homeImage = document.createElement("img");
    let menuImage = document.createElement("img");
    let contactImage = document.createElement("img");

    //set the source for each image
    homeImage.src = "house.png";
    menuImage.src = "coffee.png";
    contactImage.src = "contact.png";

    //append images to buttons
    homeButton.appendChild(homeImage);
    menuButton.appendChild(menuImage);
    contactButton.appendChild(contactImage);

    // create headers (h6) for buttons
    let homeButtonHeader = document.createElement("h6");
    let menuButtonHeader = document.createElement("h6");
    let contactButtonHeader = document.createElement("h6");

    //set header text
    homeButtonHeader.innerHTML = "Home";
    menuButtonHeader.innerHTML = "Menu";
    contactButtonHeader.innerHTML = "Say Hi";

    //append headers to buttons
    homeButton.appendChild(homeButtonHeader);
    menuButton.appendChild(menuButtonHeader);
    contactButton.appendChild(contactButtonHeader);

    // append buttons to buttons container
    buttonsContainer.appendChild(homeButton);
    buttonsContainer.appendChild(menuButton);
    buttonsContainer.appendChild(contactButton);

    // append buttons container to contents container
    contentContainer.appendChild(buttonsContainer);
    console.log("The buttons have been added to the layout");

    addEventListeners([homeButton, menuButton, contactButton]);
    console.log("the event listeners have been added");
  }

  function createLandingText() {
    const contentContainer = document.getElementById("content");

    //create the landing page elements to add on page load
    let landingPageText = document.createElement("div");
    let headline = document.createElement("h1");
    let copy = document.createElement("h3");

    //add specific ids so that styles can be applied
    landingPageText.id = "landing-page-text";
    headline.id = "headline";
    copy.id = "copy";
    //set txt
    headline.innerHTML = "Parsley & Thyme";
    copy.innerHTML = "Hipsters Abound Here... Join Us.";

    //add created divs to their parents
    landingPageText.appendChild(headline);
    landingPageText.appendChild(copy);
    contentContainer.appendChild(landingPageText);
  }

  function addEventListeners(buttons) {
    console.log("inside addeventlistener function");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        display(button);
      });
      console.log(`an eventlistener has been added to ${button.innerHTML}`);
    });

    function display(button) {
      console.log(`the ${button.id} button was clicked`);
      // if the id is menu then remove with content.innerHTML
      // set new content
      if (button.id == "menu") {
        renderMenu();
      }
      if (button.id == "home") {
        renderLandingPage();
      }
      if (button.id == "contact") {
        renderContactPage();
      }
    }
  }

  return { createButtons, createLandingText };
})();
