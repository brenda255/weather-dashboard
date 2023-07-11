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
var firstIcon = document.getElementById("first-icon");
var secondIcon = document.getElementById("second-icon");
var thirdIcon = document.getElementById("third-icon");
var fourthIcon = document.getElementById("fourth-icon");
var fifthIcon = document.getElementById("fifth-icon");

//Event listener for when "Enter" gets pressed
citySearch.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        searches.push(citySearch.value)

        for (var i = 0; i < searches.length; i++) {


            search = searches[i]
        }
    }
    getWeather(search);
    date();
    futureDate(search);
    storeSearches();
    displaySearch();
});
//Event listener for when "Search" gets clicked
searchEl.addEventListener("click", function (event) {
    event.preventDefault();

    searches.push(citySearch.value)

    for (var i = 0; i < searches.length; i++) {


        search = searches[i]
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
        .then(function (data) {
            console.log(data.weather[0].icon);
            var temp = (data.main.temp);
            var speed = (data.wind.speed);
            var humidity = (data.main.humidity);
            currentCity.textContent = data.name;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            icon.alt = data.weather[0].description;
            icon.title = data.weather[0].description;
            todayTemp.textContent ="Temp: " + temp + " °F";
            todayWind.textContent ="Wind Speed: " + speed + " MPH";
            todayHumidity.textContent ="Humidity: " + humidity + "%";
        });
}

function date() {
    todayDate.textContent = dayjs().format("MM/D/YYYY")
}

function futureDate(search) {
    var futureWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}&units=imperial`;
    fetch(futureWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (var i = 0; i < data.list.length; i++) {
                var firstDate = document.getElementById("first-date").textContent = dayjs().add(1, "day").format("MM/D/YYYY");
                var secondDate = document.getElementById("second-date").textContent = dayjs().add(2, "day").format("MM/D/YYYY");
                var thirdDate = document.getElementById("third-date").textContent = dayjs().add(3, "day").format("MM/D/YYYY");
                var fourthDate = document.getElementById("fourth-date").textContent = dayjs().add(4, "day").format("MM/D/YYYY");
                var fifthDate = document.getElementById("fifth-date").textContent = dayjs().add(5, "day").format("MM/D/YYYY");
                var dataDate = data.list[i].dt_txt.substr(0, 10);
                var dataDateFormat = dayjs(dataDate).format("MM/D/YYYY");


                if (firstDate === dataDateFormat && data.list[i].dt_txt.substr(11, 19) === "12:00:00") {
                    console.log(data.list[i]);
                    var firstTempElement = document.getElementById("first-temp");
                    var firstWindElement = document.getElementById("first-wind");
                    var firstHumidityElement = document.getElementById("first-humidity");
                  
                    var firstTempValue = data.list[i].main.temp;
                    var firstWindValue = data.list[i].wind.speed;
                    var firstHumidityValue = data.list[i].main.humidity;
                  
                    firstIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    firstIcon.alt = data.list[i].weather[0].description;
                    firstIcon.title = data.list[i].weather[0].description;
                  
                    firstTempElement.textContent ="Temp: " + firstTempValue + " °F";
                    firstWindElement.textContent ="Wind Speed: " + firstWindValue + " MPH";
                    firstHumidityElement.textContent ="Humidity: " + firstHumidityValue + " %";

                }
                if (secondDate === dataDateFormat && data.list[i].dt_txt.substr(11, 19) === "12:00:00") {
                    var secondTempElement = document.getElementById("second-temp");
                    var secondWindElement = document.getElementById("second-wind");
                    var secondHumidityElement = document.getElementById("second-humidity");
                  
                    var secondTempValue = data.list[i].main.temp;
                    var secondWindValue = data.list[i].wind.speed;
                    var secondHumidityValue = data.list[i].main.humidity;
                  
                    secondIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    secondIcon.alt = data.list[i].weather[0].description;
                    secondIcon.title = data.list[i].weather[0].description;
                  
                    secondTempElement.textContent ="Temp: " + secondTempValue + " °F";
                    secondWindElement.textContent ="Wind Speed: " + secondWindValue + " MPH";
                    secondHumidityElement.textContent ="Humidity: " + secondHumidityValue + " %";

                }
                if (thirdDate === dataDateFormat && data.list[i].dt_txt.substr(11, 19) === "12:00:00") {
                    var thirdTempElement = document.getElementById("third-temp");
                    var thirdWindElement = document.getElementById("third-wind");
                    var thirdHumidityElement = document.getElementById("third-humidity");
                  
                    var thirdTempValue = data.list[i].main.temp;
                    var thirdWindValue = data.list[i].wind.speed;
                    var thirdHumidityValue = data.list[i].main.humidity;
                  
                    thirdIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    thirdIcon.alt = data.list[i].weather[0].description;
                    thirdIcon.title = data.list[i].weather[0].description;
                  
                    thirdTempElement.textContent ="Temp: " + thirdTempValue + " °F";
                    thirdWindElement.textContent ="Wind Speed: " + thirdWindValue + " MPH";
                    thirdHumidityElement.textContent ="Humidity: " + thirdHumidityValue + " %";
                  }
                  
                  if (fourthDate === dataDateFormat && data.list[i].dt_txt.substr(11, 19) === "12:00:00") {
                    var fourthTempElement = document.getElementById("fourth-temp");
                    var fourthWindElement = document.getElementById("fourth-wind");
                    var fourthHumidityElement = document.getElementById("fourth-humidity");
                  
                    var fourthTempValue = data.list[i].main.temp;
                    var fourthWindValue = data.list[i].wind.speed;
                    var fourthHumidityValue = data.list[i].main.humidity;
                  
                    fourthIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    fourthIcon.alt = data.list[i].weather[0].description;
                    fourthIcon.title = data.list[i].weather[0].description;
                  
                    fourthTempElement.textContent = "Temp: " +fourthTempValue + " °F";
                    fourthWindElement.textContent ="Wind Speed: " + fourthWindValue + " MPH";
                    fourthHumidityElement.textContent ="Humidity: " + fourthHumidityValue + "%";
                  }
                  
                  if (fifthDate === dataDateFormat && data.list[i].dt_txt.substr(11, 19) === "12:00:00") {
                    var fifthTempElement = document.getElementById("fifth-temp");
                    var fifthWindElement = document.getElementById("fifth-wind");
                    var fifthHumidityElement = document.getElementById("fifth-humidity");
                  
                    var fifthTempValue = data.list[i].main.temp;
                    var fifthWindValue = data.list[i].wind.speed;
                    var fifthHumidityValue = data.list[i].main.humidity;
                  
                    fifthIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
                    fifthIcon.alt = data.list[i].weather[0].description;
                    fifthIcon.title = data.list[i].weather[0].description;
                  
                    fifthTempElement.textContent = "Temp: " + fifthTempValue + " °F";
                    fifthWindElement.textContent = "Wind Speed: " + fifthWindValue + " MPH";
                    fifthHumidityElement.textContent = "Humidity: " + fifthHumidityValue + "%";
                  }
                              }
        })
}
// Retrieve stored searches from local storage
var searches = JSON.parse(window.localStorage.getItem("searches")) || [];

// Function to store searches in local storage
function storeSearches() {
  window.localStorage.setItem("searches", JSON.stringify(searches));
}


//Displays previous searches
function displaySearch() {
    var previousSearches = document.getElementById("previousSearches");
    previousSearches.innerHTML = ""; // Clear previous entries
  
    for (var i = 0; i < searches.length; i++) {
      var search = searches[i];
      var li = document.createElement('li');
      li.textContent = search;
      previousSearches.appendChild(li);
    }
  }

//   var clearBtn = document.getElementById("clear-btn");

//   //Event listener for when "Clear" button is clicked
//   clearBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     clearForm();
//   });

//   //Function to clear the form input
//   function clearForm() {
//     citySearch.value="";
//   }
