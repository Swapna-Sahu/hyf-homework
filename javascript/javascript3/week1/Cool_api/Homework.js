
function airvisual() {

fetch ('http://api.airvisual.com/v2/nearest_city?key=NkfWX7atMNnwgKvu2')
.then(response => response.json())
.then((res) => {
    console.log(res);
    document.getElementById("city").innerHTML= res.data.city;
    document.getElementById("state").innerHTML= res.data.state;
    document.getElementById("country").innerHTML= res.data.country;
    document.getElementById("china").innerHTML= res.data.current.pollution.aqicn;
    document.getElementById("us").innerHTML= res.data.current.pollution.aqius;
    document.getElementById("Humidity").innerHTML= res.data.current.weather.hu +"%";
    document.getElementById("temp").innerHTML= res.data.current.weather.tp+"celcius";
    document.getElementById("ws").innerHTML= res.data.current.weather.ws+"m/s";
    // WRITE CODE HERE
});
}