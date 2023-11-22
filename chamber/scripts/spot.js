fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    const goldList = document.querySelector('.box-container .box:nth-child(1) ul');
    const silverList = document.querySelector('.box-container .box:nth-child(2) ul');
    const bronzeList = document.querySelector('.box-container .box:nth-child(3) ul');
    data.forEach((company) => {
      switch (company.membership_level) {
        case "Gold":
          goldList.innerHTML += `<li>${company.name}</li>`;
          break;
        case "Silver":
          silverList.innerHTML += `<li>${company.name}</li>`;
          break;
        case "Bronze":
          bronzeList.innerHTML += `<li>${company.name}</li>`;
          break;
      }
    });
  })
  .catch((error) => {
    console.error("Error loading the JSON file:", error);
  });