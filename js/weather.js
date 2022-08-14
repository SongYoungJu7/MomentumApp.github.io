const API_KEY = "630ddfcc213023001d2474cac82bab19";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            const city = document.querySelector("#city");
			weather.innerText = data.weather[0].main;
            city.innerText = `${data.name},`;
        });
}

function onGeoError() {
    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


