// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9



let measurementType = document.getElementById('measurement');
let contentDiv      = document.getElementById('content')
let city            = document.getElementById("city")

city.addEventListener("change", getWeatherFromData)
measurementType.addEventListener('change', changeMeasurementType)

function changeMeasurementType(unitType) {
    unitType = measurementType.value
    console.log(unitType)
    return unitType
}

async function fetchData(unitType) {
    if (unitType == "imperial") {
        return (await (fetch`http://api.openweathermap.org/data/2.5/find?q=kalmar&units=imperial&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)).json()
    }else {
        return (await (fetch`http://api.openweathermap.org/data/2.5/find?q=kalmar&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)).json()
    }
    } 


async function getWeatherFromData() {
    let data = []
    try {
        data = await fetchData()
        contentDiv.innerHTML += `
        <article>
        <h2>The weather in ${data.list[0].name}:</h2>
        <p>The local forecast says it's ${Math.round(data.list[0].main.temp)}° 
        degrees outside. And it will feel like ${Math.round(data.list[0].main.feels_like)}°.</p>
        <p>The humidity will be around ${Math.round(data.list[0].main.humidity)}%.</p>
        <p>there will be ${data.list[0].weather[0].description}</p>
        </article>
        `
    }catch(error) {
        console.log(error)
    }
}


