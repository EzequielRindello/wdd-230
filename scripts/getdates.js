const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString("en-US", options);
document.getElementById("lastModified-placeholder").textContent = lastModifiedDate;
