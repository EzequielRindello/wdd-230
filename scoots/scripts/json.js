// JSON table
const url = 'data/data.json';
const tableContainer = document.getElementById('json-table');

async function generateRentalTable() {
    const displayRentalOptions = (options) => {
        // Create table, tbody, and header rows
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let headerRows = [
            '<tr><td colspan="6"><strong>Max Rental Pricing</strong></td></tr>',
            '<tr><td colspan="2"></td><td colspan="2"><strong>Reservation</strong></td><td colspan="2"><strong>Walk-In</strong></td></tr>',
            '<tr><td><strong>Rental Type</strong></td><td><strong>Max. Persons</strong></td><td><strong>Half Day<br>(3 hrs)</strong></td><td><strong>Full Day</strong></td><td><strong>Half Day<br>(3 hrs)</strong></td><td><strong>Full Day</strong></td></tr>'
        ];

        headerRows.forEach((row) => {
            tbody.innerHTML += row;
        });

        // Add the data rows
        options.forEach((option) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${option.nombre}</td>
                <td>${option.maximodepersonas}</td>
                <td>${option.mediodia.precio}</td>
                <td>${option.fullday.precio}</td>
                <td>${option.mediodia.precio}</td>
                <td>${option.fullday.precio}</td>
            `;
            tbody.appendChild(row);
        });

        // Append the tbody to the table
        table.appendChild(tbody);

        // Append the table to the container
        tableContainer.appendChild(table);
    }

    const response = await fetch(url);
    const data = await response.json();
    displayRentalOptions(data.opcionesderenta);
}

generateRentalTable();


const cards = document.querySelector('#cards');
// JSON card
async function getCardData() {
    const displayCard = (opcionesderenta) => {
        opcionesderenta.forEach((vehicle) => {
            // Create elements to add to the div.cards element
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let vehicleImage = document.createElement('img');

            // Build the h2 content out to show the vehicle name
            name.textContent = `${vehicle.nombre}`;

            // Build the image portrait by setting all the relevant attributes
            vehicleImage.setAttribute('src', vehicle.imageurl);
            vehicleImage.setAttribute('alt', `image of ${vehicle.nombre}`);
            vehicleImage.setAttribute('loading', 'lazy');
            vehicleImage.setAttribute('width', '500');
            vehicleImage.setAttribute('height', 'auto');

            // Append the section(card) with the created elements
            card.appendChild(name);
            card.appendChild(vehicleImage);

            cards.appendChild(card);
        }); // end of arrow function and forEach loop
    }
    const response = await fetch(url);
    const data = await response.json();
    displayCard(data.opcionesderenta);
    console.log(data);
}

getCardData();