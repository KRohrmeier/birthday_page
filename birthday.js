const init = () => {
    document.querySelector("#giftbox").addEventListener("click", surprise);
};

const surprise = () => {
    let oldImage = document.querySelector("#giftbox");
    let giftDiv = document.querySelector("#giftDiv");
    let newImage = document.createElement("img");
    giftDiv.setAttribute("class", "col-sm-6 mb-3 p-2");
    newImage.setAttribute("src", "dancing_dinos.gif");
    newImage.setAttribute("alt", "three dinos dancing");
    newImage.setAttribute("class", "img-fluid");
    giftDiv.replaceChild(newImage, oldImage);

    let suggestionDiv = document.querySelector("#suggestionDiv");
    suggestionDiv.setAttribute("class", "col-sm-6 mb-3");
    let oldSuggestion = document.querySelector("#suggestion");
    let newSuggestion = document.createElement("p");
    newSuggestion.innerHTML =
        "Even if a band of dancing dinos doesn't find its way to you, we hope other surprising excitements come your way!";
    suggestionDiv.replaceChild(newSuggestion, oldSuggestion);

    let love = document.createElement("h1");
    love.innerHTML =
        "<small>Love,<br />Tante Kathi, Uncle Zack, and Jenkins</small>";
    suggestionDiv.appendChild(love);
};

window.onload = init;
