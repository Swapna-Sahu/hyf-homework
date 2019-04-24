
function weatherOfYourCity () {
   
    var cityName = document.getElementById("cityname").value;
    if(cityName.trim()=== "")  {
        alert("Please enter the city name.");
    }else {
        document.getElementById("city").innerHTML = cityName;
    }

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=9db494fc3263309230c7cd250552c430')
    .then(response => response.json())
    .then((weather) => {
        console.log(weather);
        displayWeather(weather);
        });
}

function myLocation() {
    document.getElementById("city").innerHTML = "Local Weather";
    navigator.geolocation.getCurrentPosition(function (position) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=54c9bc00ccd01fc0915e5e7426a30c90`)
            .then(response => response.json())
            .then((weather) => {
                displayWeather(weather);
            })
    })
}



function displayWeather(weather) {    
    
   
document.getElementById("cloudiness").innerHTML = weather.weather[0].description;
document.getElementById("climate").innerHTML = weather.weather[0].description;
document.getElementById("temp").innerHTML=weather.main.temp +"°C";
document.getElementById("mintemp").innerHTML=weather.main.temp_min +"°C";
document.getElementById("maxtemp").innerHTML=weather.main.temp_max +"°C";
document.getElementById("Humidity").innerHTML=weather.main.humidity + "%";
document.getElementById("Speed").innerHTML=weather.wind.speed +"m/s";
document.getElementById("speed").innerHTML=weather.wind.speed +"m/s";
document.getElementById("Degree").innerHTML=weather.wind.deg +"deg";
document.getElementById("Pressure").innerHTML=weather.main.pressure + "hPa";
var image = document.querySelector("#img");
var weatherImage= document.createElement('img');

weatherImage.src ='http://openweathermap.org/img/w/' + weather.weather[0].icon +'.png';
weatherImage.setAttribute("width","180");
image.appendChild(weatherImage);

}