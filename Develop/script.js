
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



var citySearch = $("#city-search");
var search = $("#search");
var searchBtn =$("#search-btn");
var searchHistory=$("#search-history");
var todayWeather= $("#today-weather");
var todayTemp =$(".today-temp");
var todayWind= $(".today-wind");
var todayHumidity= $(".today-humidity");
var api = "e2eeb1973163286176fac300a5fed3c2";
var searches = [];

//Render items on page
//function renderItems(search)

//Dates
//Date.text(dayjs().format("MM/DD/YYYY"));

function api(){
//Today's weather
var currentWeather =  `https://api.openweathermap.org/data/2.5/weather?q=${search.replace(" ", "+")}&appid=${api}&units=imperial`;

fetch(currentWeather)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    //loop so we can see each day's forecast
    for (var i = 0; i < data.length; i++) {
   
    }
});
}

//fetchButton.addEventListener('click', getApi);

