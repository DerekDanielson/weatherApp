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

