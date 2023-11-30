// footer current date 
const options = {
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;


// movile menu de hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // cada vez que pasa un addEventListener() cambia el i
        menuIcon.querySelector("i").classList.toggle("bi-list");
        menuIcon.querySelector("i").classList.toggle("bi-x");
    });
});
