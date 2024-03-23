// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-btn");


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click",toggleDarkMode)
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
