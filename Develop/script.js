
// // THEN I am presented with current and future conditions for that city and that city is added to the search history
// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// // WHEN I view future weather conditions for that city
// // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city




// // Global variables
// var openWeatherApiKey;
// var openWeatherCoordinatesUrl;
// var userFormEl = $("#city-search");
// var cityInputEl = $("#city");
// var fiveDayEl = $('#five-day');
// var searchHistoryEl = $('#search-history');
// //var currentDay = dayjs().format("MM/DD/YYYY");
// //var searchHistoryArray = loadSearchHistory();


// $(document).ready(function () {
//     var apiKey = "f070ce8b97f45cb75962bee42d1bfa90"

//     function searchWeather() {
//         var city = $("#city").val().trim();

//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//             .then(function (res) { return res.json() })
//             .then(function (data) {
//                 var lat = data.coord.lat;
//                 var lon = data.coord.lon;

//                 fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//                     .then(function (res) { return res.json() })
//                     .then(function (data) {

//                         console.log(data)

//                     })
//             })
//     }

//     $("#search-btn").click(searchWeather);




// });



var citySearch = document.getElementById("search");
var searchBtn = $("#search-btn");
var searchHistory = $("#search-history");
var todayWeather = $("#today-weather");
var todayTemp = document.getElementById("today-temp");
var todayWind = document.getElementById("today-wind");
var todayHumidity = document.getElementById("today-humidity");
var apiKey = "e2eeb1973163286176fac300a5fed3c2";
var searches = [];
var searchEl = document.getElementById("search-btn");
var currentCity = document.getElementById("current-city");
//var searchValEl = document.getElementById("search");

//Render items on page
//function renderItems(search)

//Dates
//Date.text(dayjs().format("MM/DD/YYYY"));

searchEl.addEventListener("click", function(event) {
    event.preventDefault();

    searches.push(citySearch.value)

    for(var i=0; i < searches.length; i++) {

   
    search=searches[i]
}
    getWeather(search);
});

function getWeather(search) {
    var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`;
    fetch(currentWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            
           var temp = (data.main.temp);
            var speed = (data.wind.speed);
            var humidity = (data.main.humidity);
            currentCity.textContent = data.name;
            todayTemp.textContent = temp + " °F";
            todayWind.textContent = speed + " MPH";
            todayHumidity.textContent = humidity + " %";
        });
}

// function userInput() {
//     var userCity = [
//         {citySearch.value;
//             getWeather(userCity)
//             result.textContent = userCity;
//             //local storage
            
//         }
//     ]
// }

// localStorage.setItem("userCity",JSON.stringify(userCity));
// var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + apiKey + "units=imperial"; 
// fetch(forecast)
// .then(function(response)) {
//     return response.JSON();
// }

// getWeather();

// function addSearchHistory() {
//     var weatherEl = document.querySelector("#search-btn").value;
//     console.log(weatherEl);
//     searchHistory.push(weatherEl)
//     localStorage.setItem('search-history', JSON.stringify(searchHistory));
// }
