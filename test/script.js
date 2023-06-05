const darkModeToggle = document.querySelector(".dark-mode-toggle");


const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    localStorage.setItem("darkMode", "enabled")
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode", "disabled")
};



darkModeToggle.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});