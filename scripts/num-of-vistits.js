let visitsDisplay = document.querySelector(".visits");

// Retrieve the number of visits from localStorage
let numOfVisits = Number(window.localStorage.getItem("visits-ls"));

if (numOfVisits === 0 || isNaN(numOfVisits)) {
    // If numOfVisits is 0 or not a number, it's the first visit
    visitsDisplay.textContent = "This is your first visit";
    numOfVisits = 1; // Set numOfVisits to 1 for the first visit
} else {
    // If numOfVisits is a valid number, display the number of visits
    visitsDisplay.textContent = numOfVisits;
    numOfVisits++; // Increment the number of visits
}

// Store the updated number of visits in localStorage
localStorage.setItem("visits-ls", numOfVisits);
