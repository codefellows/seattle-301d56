'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

// Application Setup
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// API Routes

app.get('/location', (request, response) => {
  try {
    // queryData is what the user typed into the box in the FE and hit "explore"
    const queryData = request.query.data;
    // const geoData = require('./data/geo.json');
    // json files are so old school
    // make a request to the Google Geocoding API for geocoding data
    let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${queryData}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    superagent.get(geocodeURL)
      // for setting headers, use .set
      // .set('Authorization', `Bearer ${process.env.EVENTBRITE_API_KEY}`)
      // when the data comes back from the gmaps api
      .end( (err, googleMapsApiResponse) => {
        console.log(googleMapsApiResponse.body);
        // turn it into a location instance
        const location = new Location(queryData, googleMapsApiResponse.body);
        // send that as our response to our frontend
        response.send(location);
      });
  }
  catch(error) {
    console.error(error);
    response.status(500).send('Status: 500. So sorry, something went wrong.');
  }
});

app.get('/weather', (request, response) => {
  try {
    const weatherData = getWeather();
    response.send(weatherData);
  }
  catch(error) {
    console.error(error);
    response.status(500).send('Status: 500. So sorry, something went wrong.');
  }
});

// Helper Functions

function Location(query, res) {
  this.search_query = query;
  this.formatted_query = res.results[0].formatted_address;
  this.latitude = res.results[0].geometry.location.lat;
  this.longitude = res.results[0].geometry.location.lng;
}

function getWeather() {
  const darkskyData = require('./data/darksky.json');

  const weatherSummaries = [];

  darkskyData.daily.data.forEach(day => {
    weatherSummaries.push(new Weather(day));
  });

  return weatherSummaries;
}

function Weather(day) {
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
}

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is up on ${PORT}`));
