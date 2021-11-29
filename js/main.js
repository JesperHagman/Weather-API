// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9

let measurementType = document.getElementById('measurement');
let contentDiv      = document.getElementById('content')
let city            = document.getElementById("city")

city.addEventListener("change", getWeatherFromData)


measurementType.addEventListener('change', changeMeasurementType)

function changeMeasurementType() {
    unitType = measurementType.value
    console.log(unitType)
    return unitType
}

/* function getInputValueFromCity() {
    let location = city.value
    return location
}
 */
async function fetchData(data) {

 /*    switch(changeMeasurementType) {
            case changeMeasurementType() == "imperial":
                response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=imperial&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
            case changeMeasurementType() == "metric":
                response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
            case changeMeasurementType() == "kelvin":
                response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
            break;
    }
    return  data = respone.json()
} */

   if (changeMeasurementType() == "imperial") {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=imperial&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
    }else if (changeMeasurementType() == "metric"){
        let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
    } else {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
    }
    data = await response.json();
    return data

}


function getWeatherFromData(data) {
    console.log(data)
    
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


