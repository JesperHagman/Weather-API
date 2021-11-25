// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9



let measurementType = document.querySelector('.measurement');
let contentDiv      = document.getElementById('content')
let city            = document.getElementById("city")
let celsius         = "°"
let fahrenheit      = "°F"


city.addEventListener("change", fetchData)
measurementType.addEventListener('change', changeMeasurementType)

async function fetchData() {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        let data = await response.json()
        
        getWeatherFromData(data)
        
        
        console.log(data)
    } catch(error) {
        /* contentDiv.innerHTML += "We apologize for the inconvenience it seems that we have some technical problems!" */
        console.log(error)
    }
}

function getWeatherFromData(data) {
    contentDiv.innerHTML += `
        <article>
            <h2>The weather in ${data.list[0].name}:</h2>
            <p>The local forecast says it's ${Math.round(data.list[0].main.temp)}° 
            degrees outside. And it will feel like ${Math.round(data.list[0].main.feels_like)}°.</p>
            <p>The humidity will be around ${Math.round(data.list[0].main.humidity)}%.</p>
            <p>there will be ${data.list[0].weather[0].description}</p>
        </article>
    `
}

function changeMeasurementType (event) {
    unit = `${event.target.value}`;
    
    contentDiv.textContent += `You like ${event.target.value}`;
    
}