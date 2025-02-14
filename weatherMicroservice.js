// https://api.weatherbit.io/v2.0/forecast/daily
// Fetches a 7 day forecast based on zip code

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = ""; // User needs to add API key here
const PORT = 3000; // Optionally set up port number

app.get("/weather", async (req, res) => {
    const zip = req.query.zip;

    try {
        // Fetches the weather data
        const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zip}&key=${API_KEY}`
        );
        // Gets the data as a JSON and then responds with it
        const weatherData = await response.json();
        res.json(weatherData);

    } catch {
        res.status(500).json({ error: error.message });
        alert("Can't get weather data.");
    }
});

app.listen(PORT, () => console.log(`Weather microservice running on port ${PORT}`));
