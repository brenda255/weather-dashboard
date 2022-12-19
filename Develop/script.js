var citySearch = document.getElementById("search");
var todayTemp = document.getElementById("today-temp");
var todayWind = document.getElementById("today-wind");
var todayHumidity = document.getElementById("today-humidity");
var apiKey = "e2eeb1973163286176fac300a5fed3c2";
var searches = [];
var searchEl = document.getElementById("search-btn");
var currentCity = document.getElementById("current-city");
var todayDate = document.getElementById("today-date");
var icon = document.getElementById("icon");
var firstIcon  = document.getElementById("first-icon");
var secondIcon = document.getElementById("second-icon");
var thirdIcon = document.getElementById("third-icon");
var fourthIcon = document.getElementById("fourth-icon");
var fifthIcon = document.getElementById("fifth-icon");

//Event listener for when "Enter" gets pressed
citySearch.addEventListener('keypress', function(event)
{if(event.key === 'Enter') {
    event.preventDefault();
    
    searches.push(citySearch.value)

    for(var i=0; i < searches.length; i++) {

   
    search=searches[i]
    }
}
    getWeather(search);
    date();
    futureDate(search);
    storeSearches();
    displaySearch();
  });
//Event listener for when "Search" gets clicked
searchEl.addEventListener("click", function(event) {
    event.preventDefault();

    searches.push(citySearch.value)

    for(var i=0; i < searches.length; i++) {

   
    search=searches[i]
}
    getWeather(search);
    date();
    futureDate(search);
    storeSearches();
    displaySearch();
  });
  

function getWeather(search) {
    var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`;
    fetch(currentWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.weather[0].icon);
           var temp = (data.main.temp);
            var speed = (data.wind.speed);
            var humidity = (data.main.humidity);
            currentCity.textContent = data.name;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            icon.alt = data.weather[0].description;
            icon.title = data.weather[0].description;
            todayTemp.textContent = temp + " °F";
            todayWind.textContent = speed + " MPH";
            todayHumidity.textContent = humidity + " %";
        });
}

function date () {
todayDate.textContent = dayjs().format("MM/D/YYYY")
}

function futureDate(search) {
var futureWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}&units=imperial`;
fetch(futureWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {

            for (var i = 0; i < data.list.length; i++){
                var firstDate = document.getElementById("first-date").textContent = dayjs().add(1,"day").format("MM/D/YYYY");
                var secondDate = document.getElementById("second-date").textContent = dayjs().add(2,"day").format("MM/D/YYYY");
                var thirdDate = document.getElementById("third-date").textContent = dayjs().add(3,"day").format("MM/D/YYYY");
                var fourthDate = document.getElementById("fourth-date").textContent = dayjs().add(4,"day").format("MM/D/YYYY");
                var fifthDate = document.getElementById("fifth-date").textContent = dayjs().add(5,"day").format("MM/D/YYYY");
                var dataDate = data.list[i].dt_txt.substr(0,10);
                var dataDateFormat = dayjs(dataDate).format("MM/D/YYYY");
    

            if(firstDate===dataDateFormat && data.list[i].dt_txt.substr(11,19) === "12:00:00" ){
                console.log(data.list[i]);
                var firstTemp = document.getElementById("first-temp").textContent = data.list[i].main.temp;
                var firstWind = document.getElementById("first-wind").textContent = data.list[i].wind.speed;
                var firstHumidity = document.getElementById("first-humidity").textContent = data.list[i].main.humidity;
                firstIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
                firstIcon.alt = data.list[i].weather[0].description;
                firstIcon.title = data.list[i].weather[0].description;
                firstTemp.textContent = firstTemp + " °F";
                firstWind.textContent = firstWind + " MPH";
                firstHumidity.textContent = firstHumidity + " %";
    

            }
            if(secondDate===dataDateFormat && data.list[i].dt_txt.substr(11,19) === "12:00:00" ){
                var secondTemp = document.getElementById("second-temp").textContent = data.list[i].main.temp
                var secondWind = document.getElementById("second-wind").textContent = data.list[i].wind.speed;
                var secondHumidity = document.getElementById("second-humidity").textContent = data.list[i].main.humidity;
                secondIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
                secondIcon.alt = data.list[i].weather[0].description;
                secondIcon.title = data.list[i].weather[0].description;
                secondTemp.textContent = secondTemp + " °F";
                secondWind.textContent = secondWind + " MPH";
                secondHumidity.textContent = secondHumidity + " %";


            }
            if(thirdDate===dataDateFormat && data.list[i].dt_txt.substr(11,19) === "12:00:00" ){
            var thirdTemp = document.getElementById("third-temp").textContent = data.list[i].main.temp;
            var thirdWind = document.getElementById("third-wind").textContent = data.list[i].wind.speed;
            var thirdHumidity = document.getElementById("third-humidity").textContent = data.list[i].main.humidity;               
            thirdIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
            thirdIcon.alt = data.list[i].weather[0].description;
            thirdIcon.title = data.list[i].weather[0].description;
            thirdTemp.textContent = thirdTemp + " °F";
            thirdWind.textContent = thirdWind + " MPH";
            thirdHumidity.textContent = thirdHumidity + " %";

            }
            if(fourthDate===dataDateFormat && data.list[i].dt_txt.substr(11,19) === "12:00:00" ){
            var fourthTemp = document.getElementById("fourth-temp").textContent = data.list[i].main.temp;
            var fourthWind = document.getElementById("fourth-wind").textContent = data.list[i].wind.speed;
            var fourthHumidity = document.getElementById("fourth-humidity").textContent = data.list[i].main.humidity;                
            fourthIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
            fourthIcon.alt = data.list[i].weather[0].description;
            fourthIcon.title = data.list[i].weather[0].description;
            fourthTemp.textContent = fourthTemp + " °F"
            fourthWind.textContent = fourthWind + " MPH";
            fourthHumidity.textContent = fourthHumidity + " %";

            }    
            if(fifthDate===dataDateFormat && data.list[i].dt_txt.substr(11,19) === "12:00:00" ){
            var fifthTemp = document.getElementById("fifth-temp").textContent = data.list[i].main.temp;
            var fifthWind = document.getElementById("fifth-wind").textContent = data.list[i].wind.speed;
            var fifthHumidity = document.getElementById("fifth-humidity").textContent = data.list[i].main.humidity;               
            fifthIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
            fifthIcon.alt = data.list[i].weather[0].description;
            fifthIcon.title = data.list[i].weather[0].description;
            fifthTemp.textContent = fifthTemp + " °F";
            fifthWind.textContent = fifthWind + " MPH";
            fifthHumidity.textContent = fifthHumidity + " %";
            console.log(fifthTemp.textContent = fifthTemp + " °F");        
    
        }}})}
//Stores searches in local storage
var searches = [];
function storeSearches() {
    window.localStorage.setItem("searches", JSON.stringify(searches));
}

//Displays previous searches
function displaySearch() {
    var previousSearches = document.getElementById("previousSearches");
    previousSearches.innerHTML = "";

    searches.push(input.value);
    input.textContent = "";
console.log(searches);
    document.getElementById("previous-searches").style.display = "block";

    for (var i = 0; i < searches.length; i++) {
        var search = searches[i]
        var li = document.createElement('li');
        li.textContent = search;
        previousSearches.appendChild(li)
        input.value="";
    }
    storeSearches();
 }



