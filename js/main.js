// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9



let city          = document.getElementById("city")
let contentDiv    = document.getElementById('content')
let measurementType = document.querySelector('.measurement');
let celsius       = "°"
let fahrenheit    = "°F"


city.addEventListener("change", fetchData)
measurementType.addEventListener('change', changeMeasurementType)

async function fetchData(event) {
    try {
        if (event.target.value == "imperial"){
            let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=imperial&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        } else{
            let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)  
        }
        let data = await response.json()
        console.log(data)

        getWeatherFromData(data)

        changeMeasurementType(event)
    } catch(error) {
       /*  contentDiv.innerHTML += "please double check your spelling. We apologize for the inconvenience" */
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

function changeMeasurementType (event) {


    let result = document.querySelector('.result');
    /* result.textContent = `${event.target.value}`;
  
  
    if (event.target.value == "metric") {
      result.textContent += " Jag har löst det tror jag"
  
    } */
}