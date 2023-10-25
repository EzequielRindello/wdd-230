let visitsDisplay = document.querySelector(".visits");

// retrieve the last visit date from localStorage
let lastVisit = localStorage.getItem("last-visit");

if (!lastVisit) {
    // if there is no last visit date, it's the first visit
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // calculate the time difference
    const currentDate = new Date();
    const previousVisitDate = new Date(lastVisit);
    const timeDifference = currentDate - previousVisitDate;
    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds

    if (timeDifference < oneDay) {
        // less than a day has passed since the last visit
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        // calculate the number of days
        const daysBetweenVisits = Math.floor(timeDifference / oneDay);
        const dayText = daysBetweenVisits === 1 ? "day" : "days";
        visitsDisplay.textContent = "You last visited " + daysBetweenVisits + " " + dayText + " ago.";
    }
}

// update the last visit date in localStorage
localStorage.setItem("last-visit", new Date().toString());