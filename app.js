const apiKey = "b0b9315b51123e2350d49938ac699d04";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");


//Form event listener
formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

//Retrieve data from API
async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=imperial`)

        if (!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}mph`
        ];

        //const feelsLike = Math.random(data.main.feels_link);
        //const humidity = data.main.humidity;
        //const windSpeed = Math.round(data.wind.speed);

        console.log(data);

        weatherDataEl.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;
        weatherDataEl.querySelector('.temperature').innerHTML = `${temperature}°F`;
        weatherDataEl.querySelector('.description').innerHTML = description;
        weatherDataEl.querySelector('.details').innerHTML = details.map((detail)=> `<div>${detail}<div>`).join('');

    } catch (error) {
        
    }
};