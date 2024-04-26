// FUNC Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);

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

    if (!reduceMotionEnabled) {
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

// Declare inputs of PETITION
let signNowButton = document.getElementById("sign-now-button");
const form = document.getElementById("sign-petition");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
    const inputs = form.querySelectorAll("input");

    let person = {
        username: document.getElementById("username"),
        hometown: document.getElementById("hometown"),
        artist: document.getElementById("artist"),
        email: document.getElementById("email")
    };

    let containsError = false;

    for (let prop in person) {
        if (person[prop].value.trim() === "" || person[prop].value.length < 2) {
            containsError = true;
            person[prop].classList.add("error");
        } else {
            person[prop].classList.remove("error");
        }

        //Check email
        if (prop === "email" && !emailRegex.test(person[prop].value.trim())) {
            person[prop].classList.add("error");
            containsError = true;
        };
    }
    return {person, containsError};
};

const addSignature = (event) => {
    event.preventDefault();

    let {person, containsError} = validateForm();

    if (!containsError) {
        const parentDiv = document.querySelector(".signatures");
        const newSubmit = document.createElement("p");
        newSubmit.textContent = "🖊️" + person.username.value + " from " + person.hometown.value + " has recommended new ideas for " + person.artist.value + " with mail: " + person.email.value + "!";
        parentDiv.appendChild(newSubmit);

        const totalSuggestions = document.querySelectorAll(".signatures p").length;
        document.getElementById("total-suggestions").textContent = "Current total suggestions: " + totalSuggestions;

        toggleModal();

        form.reset();
    } else {
        alert ("Your input is incorrect! Try again.");
    }
};


// UNIT 9
const toggleModal = () => {

    let modal = document.getElementById('thanks-modal');
    let modalContent = document.getElementById('thanks-modal-content');
    let person = validateForm().person;

    modal.style.display = 'flex';
    
    //Set the content
    modalContent.textContent = `Thank you, ${person.username.value}`;
    setTimeout (
        () => {
            modal.style.display = 'none';
        },
        3000
    );
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