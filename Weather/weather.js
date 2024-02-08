const searchBtn = document.querySelector("#find-location");
let latitude, longitude;

function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

function error() {
    document.getElementById("find-location").innerHTML = "Unable to retrieve your location";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".city").style.display = "none";
}

navigator.geolocation.getCurrentPosition(success, error);

async function checkWeather() {
    const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=be643ae12716909cc4db4f821345f46d";
    const weatherIcon = document.querySelector(".weather-icon");
    const response = await fetch(api_url + '&lat=' + latitude + '&lon=' + longitude);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "image/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "image/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "image/drizzle.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "image/Rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "image/Snow.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "image/mists.png";
        } else if (data.weather[0].main == "Windy") {
            weatherIcon.src = "image/windy.png";
        }


    }



}

searchBtn.addEventListener("click", checkWeather);