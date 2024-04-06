const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");

const addSignature = () => {
    const username = document.getElementById("username").value;
    const hometown = document.getElementById("hometown").value;
    const parentDiv = document.querySelector(".signatures");
    const newSubmit = document.createElement("p");

    newSubmit.textContent = username + " from " + hometown + " has recommended new ideas!";

    parentDiv.appendChild(newSubmit);
};

signNowButton.addEventListener("click", addSignature);
// Add a click event listener to the sign now button here