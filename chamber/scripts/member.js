const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members-container");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((company) => {
      const companyDiv = document.createElement("section");
      companyDiv.innerHTML = `
        <img src="${company.image}" alt="${company.name}" />
        <h3>${company.name}</h3>
        <p>${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Membership Level: ${company.membership_level}</p>
        <p style="font-style: italic; font-weight: bold;">${company.other_information}</p>
        <strong><a href="${company.website}" target="_blank">Website</a></strong>
      `;

      display.appendChild(companyDiv);
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });
