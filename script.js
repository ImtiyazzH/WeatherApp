const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(url + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp + " °C"
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity + "%"
            min_temp.innerHTML = response.min_temp + " °C"
            max_temp.innerHTML = response.max_temp + " °C"
            wind_speed.innerHTML = response.wind_speed + "mph"
            wind_degrees.innerHTML = response.wind_degrees + " °"
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })

        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})


getWeather("Delhi");


const otherCities = {
    delhi:
        fetch(url + "delhi", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                delhitemp.innerHTML = response.temp + " °C"
                delhihumidity.innerHTML = response.humidity + "% "
                delhimintemp.innerHTML = response.min_temp + " °C"
                delhimaxtemp.innerHTML = response.max_temp + " °C"
                delhiwindspeed.innerHTML = response.wind_speed + " mph"
            })
            .catch(err => console.error(err)),
    lisbon:
        fetch(url + "lisbon", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                lisbontemp.innerHTML = response.temp + " °C"
                lisbonhumidity.innerHTML = response.humidity + "% "
                lisbonmintemp.innerHTML = response.min_temp + " °C"
                lisbonmaxtemp.innerHTML = response.max_temp + " °C"
                lisbonwindspeed.innerHTML = response.wind_speed + " mph"
            })

            .catch(err => console.error(err)),
    tokyo:
        fetch(url + "tokyo", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                tokyotemp.innerHTML = response.temp + " °C"
                tokyohumidity.innerHTML = response.humidity + "% "
                tokyomintemp.innerHTML = response.min_temp + " °C"
                tokyomaxtemp.innerHTML = response.max_temp + " °C"
                tokyowindspeed.innerHTML = response.wind_speed + " mph"
            })

            .catch(err => console.error(err)),
    lasVegas:
        fetch(url + "lasVegas", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                lasVegastemp.innerHTML = response.temp + " °C"
                lasVegashumidity.innerHTML = response.humidity + "% "
                lasVegasmintemp.innerHTML = response.min_temp + " °C"
                lasVegasmaxtemp.innerHTML = response.max_temp + " °C"
                lasVegaswindspeed.innerHTML = response.wind_speed + " mph"
            })

            .catch(err => console.error(err)),
    amsterdam:
        fetch(url + "amsterdam", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                amsterdamtemp.innerHTML = response.temp + " °C"
                amsterdamhumidity.innerHTML = response.humidity + "% "
                amsterdammintemp.innerHTML = response.min_temp + " °C"
                amsterdammaxtemp.innerHTML = response.max_temp + " °C"
                amsterdamwindspeed.innerHTML = response.wind_speed + " mph"
            })

            .catch(err => console.error(err)),
    london:
        fetch(url + "london", options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                londontemp.innerHTML = response.temp + " °C"
                londonhumidity.innerHTML = response.humidity + "% "
                londonmintemp.innerHTML = response.min_temp + " °C"
                londonmaxtemp.innerHTML = response.max_temp + " °C"
                londonwindspeed.innerHTML = response.wind_speed + " mph"
            })

            .catch(err => console.error(err))

}


const weatherInfo = document.getElementById('weather-information-section');
submit.addEventListener("click", (e) => {
    weatherInfo.classList.toggle('active');
    e.preventDefault();
})
srinagar.addEventListener("click", (e) => {
    weatherInfo.classList.toggle('active');
    e.preventDefault();
})
chicago.addEventListener("click", (e) => {
    weatherInfo.classList.toggle('active');
    e.preventDefault();
})
berlin.addEventListener("click", (e) => {
    weatherInfo.classList.toggle('active');
    e.preventDefault();
})
paris.addEventListener("click", (e) => {
    weatherInfo.classList.toggle('active');
    e.preventDefault();
})