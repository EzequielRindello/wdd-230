const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


const membersContainer = document.getElementById("members-container");

// Cargar el archivo JSON
fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
        // Recorre los datos y crea elementos HTML para cada miembro
        data.forEach((member) => {
            const memberSection = document.createElement("section");
            memberSection.innerHTML = `
        <img src="${member.image}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Membership Level: ${member.membership_level}</p>
        <p>Other Information: ${member.other_information}</p>
        <a href="${member.website}" target="_blank">Website</a>
      `;
            membersContainer.appendChild(memberSection);
        });
    })
    .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
    });
