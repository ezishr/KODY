// FUNC Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button");

// Get all input fields
const petitionInputs = document.querySelectorAll('#sign-petition input');

// Add event listeners to input fields for input event
petitionInputs.forEach(input => {
    input.addEventListener('input', () => {
        // Get the index of the current input field
        const currentIndex = [...petitionInputs].indexOf(input);

        // Loop through previous input fields
        for (let i = 0; i < currentIndex; i++) {
            if (petitionInputs[i].value.trim() === '') {
                petitionInputs[i].classList.add('error');
            } else {
                petitionInputs[i].classList.remove('error');
            }
        }
    });
});

// FUNC Validate Petition Form
const validateForm = () => {
    let containsErrors = false;

    petitionInputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            containsErrors = true;
        } else {
            input.classList.remove('error');
        }
    });

    return containsErrors;
};

// FUNC Add Signature
const addSignature = (event) => {
    const username = document.getElementById("username").value;
    const hometown = document.getElementById("hometown").value;
    const artist = document.getElementById("artist").value;
    
    if (!validateForm()) {
        const parentDiv = document.querySelector(".signatures");
        const newSubmit = document.createElement("p");
        newSubmit.textContent = "🖊️" + username + " from " + hometown + " has recommended new ideas for" + artist + "!";
        parentDiv.appendChild(newSubmit);

        //Update Count of Signatures
        const totalSuggestions = document.querySelectorAll(".signatures p").length;
        document.getElementById("total-suggestions").textContent = "Current total suggestions: " + totalSuggestions;
    } else {
        alert("You have put in invalid suggestion! Try again.")
    }


    event.preventDefault();
};

signNowButton.addEventListener('click', addSignature);
  