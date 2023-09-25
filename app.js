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

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=imperial`)

        if (!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        
    }
};