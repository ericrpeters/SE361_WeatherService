# Weather MicroService
Retrieves a JSON containing weather data for a 7 day forecast based on zip.

## Installation
1. Clone the repository:
    ```sh
   git clone https://github.com/ericrpeters/SE361_WeatherService.git
    ```
2. Navigate to the directory containing the program
3. Provide an API key for weatherMicroservice.js by signing up at https://www.weatherbit.io/
   ```sh
   const API_KEY = "<Your Key Here>";
   ```
4. Set the port for the microservice (Optional):
   ```sh
   const PORT = <Your Port Number Here>;
   ```
5. Install dependencies:
   ```sh
   npm install
   ```
6. Start program:
   ```sh
   npm start
   ```
## Communication 
### Requesting Data
The user can create some type of event listener that takes a zip code and passes it to a fetch request.
1. Provide a zip code to be used as a variable:
   ```sh
   const zip = document.querySelector("#zip").value.trim();
   ```
   Here #zip is the id for the input of zip code
   
2. Fetch the weather data from the running microservice:
   ```sh
   const response = await fetch(`http://localhost:3000/weather?zip=${zip}`);
   ```
   In the above, port 3000 is used but this can be set by the user in the microservice.
     
### Receiving Data
If the reponse is ok, the user can store this data.
1. Provide an object to hold the incoming response:
   ```sh
   const data = await response.json();
   ```
   This will output a JSON containing weather data which can be manipulated by the user.

## UML
![alt text](https://github.com/ericrpeters/SE361_WeatherService/main/WeatherMicroserviceUML.drawio.png?raw=true)
