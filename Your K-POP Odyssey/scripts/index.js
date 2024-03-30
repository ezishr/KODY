const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", toggleDarkMode);