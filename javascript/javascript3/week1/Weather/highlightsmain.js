function addCity() {
    var city = prompt("Please enter city name", "Copenhagen");
  if (city != null) {
        fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=9db494fc3263309230c7cd250552c430')
    .then(response => response.json())
    .then((weather) => {
        console.log(weather);
        //displayClimate(weather);
        let location= document.querySelector("#user_input");

    let cityDiv = document.createElement("div");  
cityDiv.style.backgroundColor= "red";
    let cityName = document.createElement("p");
    cityName.innerHTML = city;
    let temp = document.createElement("p");
    temp.innerHTML=weather.main.temp;
    let image = document.createElement("img");
    image.src='http://openweathermap.org/img/w/' + weather.weather[0].icon +'.png';
    temp.appendChild(image);
    cityName.appendChild(temp);
    cityDiv.appendChild(cityName);
    location.appendChild(cityDiv);
        });
  }
}
