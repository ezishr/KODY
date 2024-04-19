// FUNC Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);


// Declare inputs of PETITION
let signNowButton = document.getElementById("sign-now-button");
const form = document.getElementById("sign-petition");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
    let containsError = false;

    const inputs = form.querySelectorAll("input");

    for (let i=0; i <= inputs.length; i++){
        const input = inputs[i];
        const value = input.value;

        if (value.trim() === "" || value.length < 2) {
            containsError = true;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        };

        if (input.id === "email" && !emailRegex.test(value)) {
            containsError = true;
            input.classList.add("error");
        };
    };
    
    return containsError;
};


const addSignature = (event) => {
    event.preventDefault();

    if (validateForm) {
        const username = document.getElementById("username").value;
        const hometown = document.getElementById("hometown").value;
        const artist = document.getElementById("artist").value;
        const parentDiv = document.querySelector(".signatures");
        const newSubmit = document.createElement("p");
        newSubmit.textContent = "🖊️" + username + " from " + hometown + " has recommended new ideas for" + artist + "!";
        parentDiv.appendChild(newSubmit);

        const totalSuggestions = document.querySelectorAll(".signatures p").length;
        document.getElementById("total-suggestions").textContent = "Current total suggestions: " + totalSuggestions;
    } else {
        alert ("Your input is incorrect! Try again.");
    };
};


// Make all previous inputs red border if
for (let i = 0; i < form.querySelectorAll('input').length; i++) {
    const input = form.querySelectorAll('input')[i]; 

    input.addEventListener('focus', () => {
      for (let j = i-1; j>=0; j--) {
        const previousInput = form.querySelectorAll("input")[j];
        if (previousInput.value.trim() === "") {
            previousInput.classList.add("error");
        } else { break; };
      };
    });
};


signNowButton.addEventListener("click", addSignature);


