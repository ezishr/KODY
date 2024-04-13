// FUNC Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);


// Declare inputs of PETITION
let signNowButton = document.getElementById("sign-now-button");
const username = document.getElementById("username");
const hometown = document.getElementById("hometown");
const artist = document.getElementById("artist");
const email = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //to check the valid of email input
const petitionInputs = document.querySelectorAll("#sign-petition input");

const validateForm = () => {
    let containsError = false;
    petitionInputs.forEach ( input => {
        input.addEventListener( "input", () => {
            const currentInputIndex = [...petitionInputs].indexOf(input);

            for (let i = 0; i < currentInputIndex; i++) {
                if (petitionInputs[i].value.trim() === "") {
                    petitionInputs[i].classList.add("error");
                    containsError = true;
                } else {
                    petitionInputs[i].classList.remove("error");
                    containsError = false;
                }
            }

            if (input.id = "email") {
                if (!emailRegex.test(input.value)) {
                    input.classList.add("error");
                    containsError = true;
                } else {
                    input.classList.remove("error");
                    containsError = false;
                }
            };
        });
            return containsError;
    });
    return containsError;
};

//FUNC addSignature
const addSignature = (event) => {
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
    };

    event.preventDefault();
};

signNowButton.addEventListener('click', addSignature);