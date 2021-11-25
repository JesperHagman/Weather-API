// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9



let city = document.getElementById("city")
let contentDiv = document.getElementById('content')

city.addEventListener("change", fetchData)

async function fetchData() {
    try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city.value}&units=metric&appid=4423845cee6ed32c6e6b2e17f19bbdc9`);
        if(!response.ok) {
            throw new Error('Some network problems')
        }
        let data = await response.json()
        console.log(data)

        getWeatherFromData(data)
        
    } catch(error) {
        console.log(error)
    }
}

/* function temperature(unit) {
    let typOfTemprature = document.getElementById("typOfTemprature");
    unit = typOfTemprature.options[typOfTemprature.selectedIndex].text;
    console.log(unit)
} */

function getWeatherFromData(data) {
    console.log(data.list[0].main)
    let content = document.getElementById("content")
    content.innerHTML = `
        <article>
            <h2>The weather in ${data.list[0].name}:</h2>
            <p>The local forcast says it's ${Math.round(data.list[0].main.temp)}° 
            degrees celsius outside. But it will feel like ${Math.round(data.list[0].main.feels_like)}°.</p>
            <p>the humidity will be around ${Math.round(data.list[0].main.humidity)}%.</p>
            <p></p>
            <p></p>
            
        </article>
    `
}