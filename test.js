// User submits zip code form
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const zip = document.querySelector("#zip").value.trim();

    if (!zip) {
        alert("Enter a zip code!");
    }

    try {
        const response = await fetch(`http://localhost:3000/weather?zip=${zip}`); 
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            updateWeatherTable(data.data); // data is a field within the data
            alert("Data received!");
        }
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Data not received!");
    }
});

// Populate table with data
function updateWeatherTable(weatherData) {
    const tableBody = document.querySelector("#weatherTable tbody");
    tableBody.innerHTML = "";
    weatherData.forEach(day => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${day.datetime}</td>
            <td>${day.weather.description}</td>
            <td><img src="https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png" alt="${day.weather.description}" /></td>
        `;

        tableBody.appendChild(row);
    });
}

