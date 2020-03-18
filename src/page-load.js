const pageLoad = () => {
  window.addEventListener("load", renderItems);
};

const renderItems = () => {
  const contentContainer = document.getElementById("content");
  console.log(contentContainer);
  let landingPageText = document.createElement("div");
  let headline = document.createElement("h1");
  let copy = document.createElement("h3");
  landingPageText.id = "landing-page-text";
  headline.id = "headline";
  copy.id = "copy";
  headline.innerHTML = "Parsley & Thyme";
  copy.innerHTML = "Hipsters Abound Here... Join Us.";
  landingPageText.appendChild(headline);
  landingPageText.appendChild(copy);
  contentContainer.appendChild(landingPageText);
};

export { pageLoad, renderItems };
