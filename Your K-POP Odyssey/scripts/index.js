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
  let isValid = true; // Flag to track overall validity

  const inputs = form.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) { // Use `<` instead of `<=`
    const input = inputs[i];
    const value = input.value.trim();

    if (value === "" || value.length < 2) {
      isValid = false;
      input.classList.add("error");
    } else {
      isValid = true; // Reset to true only after a valid input
      input.classList.remove("error");
    }

    if (input.id === "email" && !emailRegex.test(value)) {
      isValid = false;
      input.classList.add("error");
    }
  }

  return isValid;
};

const addSignature = (event) => {
  event.preventDefault();

  if (validateForm()) {
    // Form is valid, create and add the new signature element
    const username = document.getElementById("username");
    const hometown = document.getElementById("hometown");
    const artist = document.getElementById("artist");
    const parentDiv = document.querySelector(".signatures");
    const newSubmit = document.createElement("p");
    newSubmit.textContent = "️" + username.value + " from " + hometown.value + " has recommended new ideas for " + artist.value + "!";
    parentDiv.appendChild(newSubmit);

    // Update total suggestions (optional)
    const totalSuggestions = document.querySelectorAll(".signatures p").length;
    document.getElementById("total-suggestions").textContent = "Current total suggestions: " + totalSuggestions;

  } else {
    // Form is invalid, display an alert (optional)
    alert("Please fill out all fields correctly!");
  }
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


