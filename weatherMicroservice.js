// https://api.weatherbit.io/v2.0/forecast/daily
// Fetches a 7 day forecast based on zip code

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "";
const PORT = 3000;

app.get("/weather", async (req, res) => {
    const zip = req.query.zip;

    try {
        const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zip}&key=${API_KEY}`
        );

        const weatherData = await response.json();
        res.json(weatherData);

    } catch {
        res.status(500).json({ error: error.message });
        alert("Can't get weather data.");
    }
});

app.listen(PORT, () => console.log(`Weather microservice running on port ${PORT}`));
