let weather = {
    "apiKey" : "7acc067b36dea19a837bf42c8b46be84",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey)
        .then((response)=> (response.json()))
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".temp").innerText = temp ;
        document.querySelector(".desc").innerText = description;
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "km/h";
 
    },
    searchWeather: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search-button").addEventListener("click",function() {
    weather.searchWeather()
})

document.querySelector(".search-bar").addEventListener("keyup",function(e) {
    if(e.key == "Enter"){
        weather.searchWeather()
    }
})

