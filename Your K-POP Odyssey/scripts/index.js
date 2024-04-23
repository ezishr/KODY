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
    const inputs = form.querySelectorAll("input");

    let person = {};

    let containsError = false;

    // let person = {
    //     username: inpust[0].value,
    //     hometown: inputs[1].value,
    //     artist: inputs[2].value,
    //     email: inputs[3].value,
    // };

    for (let i=0; i < inputs.length; i++){
        const input = inputs[i];
        const value = inputs[i].value.trim();

        // Check if input is empty or too short
        if (value === "" || value.length < 2) {
            containsError = true;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
            switch (input.id) {
                case "username":
                    person.username = value;
                    break;
                case "hometown":
                    person.hometown = value;
                    break;
                case "artist":
                    person.artist = value;
                    break;
                case "email":
                    if(!emailRegex.test(value)) {
                        containsError = true;
                        input.classList.add("error")
                    } else {
                        input.classList.remove("error");
                        person.email = value;
                    }
                    break;
            }
        }

        // Check if input is an email and validate format
        // if (input.id === "email" && !emailRegex.test(value)) {
        //     containsError = true;
        //     input.classList.add("error");
        // }
    }
    
    return {person, containsError};
};


const addSignature = (event) => {
    event.preventDefault();

    // const isValid = !validateForm();

    let {person, containsError} = validateForm();

    if (!containsError) {
        // const username = document.getElementById("username").value;
        // const hometown = document.getElementById("hometown").value;
        // const artist = document.getElementById("artist").value;
        const parentDiv = document.querySelector(".signatures");
        const newSubmit = document.createElement("p");
        newSubmit.textContent = "🖊️" + person.username + " from " + person.hometown + " has recommended new ideas for " + person.artist + " with mail: " + person.email + "!";
        parentDiv.appendChild(newSubmit);

        const totalSuggestions = document.querySelectorAll(".signatures p").length;
        document.getElementById("total-suggestions").textContent = "Current total suggestions: " + totalSuggestions;

        //Make all inputs empty again
        form.reset();
    } else {
        alert ("Your input is incorrect! Try again.");
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
        } else { 
            previousInput.classList.remove("error");
            break;
        }
      }
    });

    input.addEventListener("input", () => {
        input.classList.remove("error");
    });
};

signNowButton.addEventListener("click", addSignature);


// UNIT 8
let animation = {
    revealDistance: "300px",
    initialOpacity: 0,
    transitionDelay: '0s',
    transitionDuration: '1s',
    transitionProperty: "all",
    transitionTimingFuction: 'ease',
};

// Select all containers having .revealable class
let revealableContainers = document.querySelectorAll(".revealable");  

// Function to loop to each container having .revealable class
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        // Gets the height of the browser window.
        let windowHeight = window.innerHeight;

        // Calculates the distance between the top of the current revealable container and the top of the viewport
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

        if (topOfRevealableContainer < windowHeight - parseInt(animation.revealDistance)) {
            revealableContainers[i].classList.add("active");
        } else {
            revealableContainers[i].classList.remove("active");
        }
    }
};

window.addEventListener("scroll", reveal);


// stretch section
let reduceMotionBtn = document.getElementById("reduce-motion");

let reduceMotionEnabled = true;

const reduceMotion = () => {    

    if (reduceMotionEnabled) {
        animation.transitionDuration = '1s';
        animation.transitionTimingFunction = 'ease';
        
        for (let i = 0; i < revealableContainers.length; i++) {
            revealableContainers[i].style.transitionDelay = animation.transitionDelay;
            revealableContainers[i].style.transitionDuration = animation.transitionDuration;
            revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
        }

    } else {
        animation.transitionDuration = '0s';
        animation.transitionTimingFuction = 'none';
    
        for (let i= 0; i < revealableContainers.length; i++) {
            revealableContainers[i].style.transitionDelay = animation.transitionDelay;
            revealableContainers[i].style.transitionDuration = animation.transitionDuration;
            revealableContainers[i].style.transitionTimingFuction = animation.transitionTimingFuction;
        };

        console.log("`Reduce Motion is in: " + reduceMotionEnabled);
    }

    reduceMotionEnabled =!reduceMotionEnabled;
};

reduceMotionBtn.addEventListener("click", reduceMotion);

// UNIT 9
const toggleModal = (person) => {
    let modal = document.getElementById('thanks-modal');
    let modalContent = document.getElementById('thanks-modal-content');

    modal.style.display('flex');
    
}
