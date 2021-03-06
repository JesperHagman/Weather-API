// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9

let measurementType = document.getElementById('measurement');
let contentDiv      = document.getElementById('content')
let city            = document.getElementById("city")

city.addEventListener("change", getWeatherFromData)
measurementType.addEventListener('change', changeMeasurementType)

async function getWeatherFromData(data) {
    data = []
    let location = city.value
    try {
        data = await fetchData(location)
        clearText()
        printOutcomeFromData(data)
    }catch(error) {
        console.log(error)
        contentDiv.innerHTML = `<p>${location} is an invalid search! Please try again</p>`
    }
}
async function fetchData(location) {
   if (changeMeasurementType() == "metric") {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        let data = await response.json();
        return data
    }else if (changeMeasurementType() == "imperial"){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${location}&units=imperial&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        let data = await response.json();
        return data
    } else {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${location}&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        let data = await response.json();
        return data
    }
}
function printOutcomeFromData(data){
    contentDiv.innerHTML = `
        <article>
        <h2>The weather in ${data.list[0].name}:</h2>
        <p>The local forecast says it's ${Math.round(data.list[0].main.temp)}° 
        degrees outside. And it will feel like ${Math.round(data.list[0].main.feels_like)}°.</p>
        <p>The humidity will be around ${Math.round(data.list[0].main.humidity)}%.</p>
        <p>There will be ${data.list[0].weather[0].description}</p>
        </article>
        `
}
function changeMeasurementType() {
    unitType = measurementType.value
    return unitType
}
function clearText() {
    city.value = onfocus = this.value = ""
    contentDiv.innerHTML = ""
}