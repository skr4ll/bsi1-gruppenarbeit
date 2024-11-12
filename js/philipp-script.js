// Script for the tourdates.html page
const venue_div = document.getElementById("div_venues");
const error_div = document.getElementById("div_error");

async function fetchVenues() {
    const response = await fetch('data/venues.json');
    const data = await response.json();
    return data.venues;
  }
  
async function displayVenues(venues) {
  venue_div.innerHTML = "";  
  venues.forEach(venue => {
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
fetchVenues().then(displayVenues);

async function filter() {
  event.preventDefault();
  let sale_status, sitze_vorhanden, stehen_vorhanden, location= "";
  location = document.getElementById('location').value;
  if (document.getElementById('sale-status').checked) {sale_status = "on-sale";}
  if (document.getElementById('sitze-vorhanden').checked) {sitze_vorhanden = "ja";}
  if (document.getElementById('stehen-vorhanden').checked){stehen_vorhanden = "ja";}
  
  const data = await fetchVenues();
  const filtered_data = data.filter(venue => 
    (location ? (venue.kontinent === location || venue.land === location) : true) &&
    (sale_status ? venue.status === sale_status : true) &&
    (sitze_vorhanden ? venue.sitzplatz === sitze_vorhanden : true) &&
    (stehen_vorhanden ? venue.stehplatz === stehen_vorhanden : true)
  );
  displayVenues(filtered_data);

  }
