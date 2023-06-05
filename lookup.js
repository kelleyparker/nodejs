// Javascript file that outputs 10 USA ticketmaster events.  API key is redacted.

require('isomorphic-fetch');
const fetch = global.fetch;

const apiKey = '';
const baseUrl = 'https://app.ticketmaster.com/discovery/v2';
const searchEventsUrl = `${baseUrl}/events.json`;

// Function to fetch events
async function fetchEvents() {
  const searchParams = {
    apikey: apiKey,
    country: 'US',
    size: 10, // Adjust the size as per your requirement
  };

  try {
    const response = await fetch(searchEventsUrl + '?' + new URLSearchParams(searchParams));
    const data = await response.json();

    // Extract event details
    const events = data._embedded.events;

    // Process event details
    events.forEach((event) => {
      const eventName = event.name;
      const eventDate = event.dates.start.localDate;
      const eventTime = event.dates.start.localTime;
      const eventVenue = event._embedded.venues[0].name;
      const eventCity = event._embedded.venues[0].city.name;
      const eventCountry = event._embedded.venues[0].country.name;

      // Do something with event details
      console.log('Event Details:');
      console.log(`Name: ${eventName}`);
      console.log(`Date: ${eventDate}`);
      console.log(`Time: ${eventTime}`);
      console.log(`Venue: ${eventVenue}`);
      console.log(`City: ${eventCity}`);
      console.log(`Country: ${eventCountry}`);
      console.log('-------------------------');
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchEvents function
fetchEvents();
