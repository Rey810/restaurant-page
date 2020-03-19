console.log("inside event-listener function.js");

import { renderItems } from "./page-load";

let someStarters = [
  "Carpaccio",
  "Snail Soup",
  "Weed Brownies",
  "BBQ Wings",
  "Haloumi"
];

let someMains = [
  "A Big Bowl of Veggies",
  "Chia Seeds and a Bunch of Grapes",
  "A Steak (excl. meat)",
  "Happy Vibes and A Tribe",
  "3x Giant Potatoes"
];

let someDesserts = [
  "Italian Gelato",
  "Custard and Jelly",
  "Black Forest Cake",
  "200g Ice Cubes (served chilled)",
  "An Edible Organic Facemask"
];

function renderLandingPage() {
  console.log("Inside the renderLandingPage function");
  let content = document.getElementById("content");

  if (document.getElementById("menu-container")) {
    content.innerHTML = "";
    renderItems();
  } else if (document.getElementById("contact-container")) {
    content.innerHTML = "";
    renderItems();
  } else {
    console.log("The landing page is already rendered");
  }
}

function renderContactPage() {
  console.log("Inside the renderContactPage function");
  let content = document.getElementById("content");
  let landingPageText;
  let menuContainer;
  let contactContainer;

  if (document.getElementById("landing-page-text")) {
    landingPageText = document.getElementById("landing-page-text");
    //fade out landing page text then remove it
    landingPageText.style.animation = "fadeOut .3s forwards";

    setTimeout(() => {
      content.removeChild(landingPageText);
    }, 300);

    //content container
    contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    content.appendChild(contactContainer);
  } else if (document.getElementById("menu-container")) {
    menuContainer = document.getElementById("menu-container");
    //fade out landing page text then remove it
    menuContainer.style.animation = "fadeOut .3s forwards";

    setTimeout(() => {
      content.removeChild(menuContainer);
    }, 300);

    //content container
    contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";
    content.appendChild(contactContainer);
  } else {
    console.log(
      "The contact page is already rendered and I'll now exit the function."
    );
    return;
  }

  //create the contact container
  //it already has an id
  let contactHeader = document.createElement("h2");
  contactHeader.innerHTML = "Contact Us";
  let email = document.createElement("h3");
  email.innerHTML = "reyvdb@gmail.com";
  let twitter = document.createElement("h3");
  twitter.innerHTML = "@ReY8l0";

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(email);
  contactContainer.appendChild(twitter);
  content.appendChild(contactContainer);
}

function renderMenu() {
  console.log("Inside the renderMenu function");
  let content = document.getElementById("content");
  let landingPageText;
  let menuContainer;
  let contactContainer;
  // this checks if the element exists.
  // To prevent errors, it returns if the element does not exist
  if (document.getElementById("landing-page-text")) {
    landingPageText = document.getElementById("landing-page-text");
    //fade out landing page text then remove it
    landingPageText.style.animation = "fadeOut .3s forwards";

    setTimeout(() => {
      content.removeChild(landingPageText);
    }, 300);

    //main container
    menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);
  } else if (document.getElementById("contact-container")) {
    contactContainer = document.getElementById("contact-container");
    //fade out contact page then remove it
    contactContainer.style.animation = "fadeOut .3s forwards";

    setTimeout(() => {
      content.removeChild(contactContainer);
    }, 300);

    //main container
    menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);
  } else {
    console.log("The menu is already rendered.");
    return;
    //exits the function which needs to be done when the if statement isn't met otherwise the code after this will return an error because menuContainer has no value now
  }

  //3 different sections of the menu
  let startersContainer = document.createElement("section");
  startersContainer.id = "starters";
  menuContainer.appendChild(startersContainer);

  let mainsContainer = document.createElement("section");
  mainsContainer.id = "mains";
  menuContainer.appendChild(mainsContainer);

  let dessertsContainer = document.createElement("section");
  dessertsContainer.id = "desserts";
  menuContainer.appendChild(dessertsContainer);

  //add some starters
  for (let i = 0; i < 5; i++) {
    let starter = document.createElement("div");
    starter.id = `starter_${i}`;
    starter.classList.add("starter-rows");
    let starterName = document.createElement("h4");
    //set startername to what it is in the someStarters array
    starterName.innerHTML = someStarters.slice(i, i + 1);
    let starterPrice = document.createElement("h4");
    //set a random price for items
    starterPrice.innerHTML = Math.floor(Math.random() * 100) + 30;
    starter.appendChild(starterName);
    starter.appendChild(starterPrice);
    startersContainer.appendChild(starter);

    //add some mains
    let main = document.createElement("div");
    main.id = `main_${i}`;
    main.classList.add("main-rows");
    let mainName = document.createElement("h4");
    //set mainname to what it is in the somemains array
    mainName.innerHTML = someMains.slice(i, i + 1);
    let mainPrice = document.createElement("h4");
    //set a random price for items
    mainPrice.innerHTML = Math.floor(Math.random() * 100) + 100;
    main.appendChild(mainName);
    main.appendChild(mainPrice);
    mainsContainer.appendChild(main);

    //add some desserts
    let dessert = document.createElement("div");
    dessert.id = `dessert_${i}`;
    dessert.classList.add("dessert-rows");
    let dessertName = document.createElement("h4");
    //set dessertname to what it is in the somedesserts array
    dessertName.innerHTML = someDesserts.slice(i, i + 1);
    let dessertPrice = document.createElement("h4");
    //set a random price for items
    dessertPrice.innerHTML = Math.floor(Math.random() * 100) + 100;
    dessert.appendChild(dessertName);
    dessert.appendChild(dessertPrice);
    dessertsContainer.appendChild(dessert);
  }
}

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

export { display };
