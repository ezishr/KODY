const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button");

const addSignature = (event) => {
    const username = document.getElementById("username").value;
    const hometown = document.getElementById("hometown").value;
    const parentDiv = document.querySelector(".signatures");
    const newSubmit = document.createElement("p");

    newSubmit.textContent = username + " from " + hometown + " has recommended new ideas!";

    parentDiv.appendChild(newSubmit);

    event.preventDefault();
};

// Add a click event listener to the sign now button here

// UNIT 7

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements; // count only 3 input elements, label element is not considered as an element in form

    console.log(petitionInputs);
    // TODO: Loop through all inputs
    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add("error");
        } else {
            petitionInputs[i].classList.remove("error");
        };
    }
    
    // TODO: Validate the value of each input
    if (containsErrors === false) {
        addSignature();
        for (i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = "";
            containsErrors = false;
        }
    }  
};
  
signNowButton.addEventListener('click', validateForm);
  