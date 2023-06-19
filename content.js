const homeContentToggle = document.querySelector("#home-button");
const homeContent = document.querySelector("#home");
const resumeContentToggle = document.querySelector("#resume-button");
const resumeContent = document.querySelector("#resume");

function setFocus(focus, selector) {
    unsetFocus(currentFocus, currentSelector);

    console.log(`Set ${selector}`);

    currentFocus = focus;
    currentSelector = selector;

    focus.classList.add(`${selector}`);
} 

function unsetFocus(currentFocus, selector) {

    console.log(`Unset ${selector}`);
    currentFocus.classList.remove(`${selector}`);
}

homeContentToggle.addEventListener("click", () => {
    setFocus(homeContent, "home-content");
});

resumeContentToggle.addEventListener("click", () => {
    setFocus(resumeContent, "resume-content");
});

let currentFocus = homeContent;
let currentSelector = "home-content";

setFocus(currentFocus, currentSelector);