// set the way to display the date
const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
currentDate.textContent = new Date().toLocaleDateString("en-US", options);

// dont work as planned
const lastModified = document.getElementById('lastModified-placeholder');
lastModified.textContent = new Date().toLocaleDateString("en-US", options);

