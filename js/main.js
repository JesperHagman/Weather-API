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
        console.log(data)

        getWeatherFromData(data)

        changeMeasurementType(e)

      
    } catch(error) {
        contentDiv.innerHTML += "please double check your spelling. We apologize for the inconvenience"
    }
}

function getWeatherFromData(data) {
    contentDiv.innerHTML += `
        <article>
            <h2>The weather in ${data.list[0].name}:</h2>
            <p>The local forecast says it's ${Math.round(data.list[0].main.temp)}° 
            degrees celsius outside. And it will feel like ${Math.round(data.list[0].main.feels_like)}°.</p>
            <p>The humidity will be around ${Math.round(data.list[0].main.humidity)}%.</p>
            <p>there will be ${data.list[0].weather[0].description}</p>
        </article>
    `
}

function changeMeasurementType (e) {


    let result = document.querySelector('#content');
    result.innerHTML = `${e.target.value}`;

    result.textContent = `${e.target.value}`;
        if (e.target.value == "imperial") {
            result.textContent += " Jag har löst det tror jag"
        
          }
  
  
    
}