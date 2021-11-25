// my API key: 4423845cee6ed32c6e6b2e17f19bbdc9



let city = document.getElementById("city")

function temperature(temp) {
    let typOfTemprature = document.getElementById("typOfTemprature");
    let unit = typOfTemprature.options[typOfTemprature.selectedIndex].text;
    console.log(unit)

    if (unit == "Fahrenheit") {
        let temp = "imperial"
    } else {
        temp = "metric"
    }
}


async function fetchData(temp) {
    try {
        let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city.value}&units=${temp.value}&appid=4423845cee6ed32c6e6b2e17f19bbdc9`)
        let data = await response.json()

        console.log(data)

    }catch(error) {

    }
}

