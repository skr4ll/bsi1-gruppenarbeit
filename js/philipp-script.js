// Script for the tourdates.html page
const venue_div = document.getElementById("div_venues");

async function fetchVenues() {
    const response = await fetch('data/venues.json');
    return await response.json();
  }
  
async function displayVenues() {
    const data = await fetchVenues();

    data.venues.forEach(venue => {
        let venue_header = document.createElement("h2");
        venue_header.textContent = venue.name;
        venue_div.appendChild(venue_header);

        let venue_para = document.createElement("p");
        venue_para.textContent = `
        ${venue.stadt}, ${venue.land}, (${venue.kontinent}) am: ${venue.datum}
        | Preis: ${venue.preis}€
        | Steh-/Sitzplätze: ${venue.stehplatz}/${venue.sitzplatz}
        | Status: ${venue.status}
        | Einlass ab: ${venue.einlass}h
      `;
        venue_div.appendChild(venue_para);
    });
}

const lol = () => {
    alert("LOL");
}
displayVenues();