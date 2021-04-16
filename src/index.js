// Change date

let now = new Date();
let currentDate = document.querySelector("#current-date");

let date = now.getDate();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

currentDate.innerHTML = `${day}, ${month} ${date} ${year}`;

let currentTime = document.querySelector("#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
  currentTime.innerHTML = `0${hours}`;
}
if (minutes < 10) {
  currentTime.innerHTML = `${minutes}`;
}

currentTime.innerHTML = `${hours}:${minutes}`;

// Weather API
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let displayedTemp = document.querySelector("#displayed-temp");
  displayedTemp.innerHTML = `${temperature}`;
}

// Change City
let apiKey = "df3cb55bcc566bfc15bd0510f52871eb";
let units = "metric";
function enterCity() {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let displayedCity = document.querySelector("#displayed-city");
  displayedCity.innerHTML = `${cityInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", enterCity);

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", enterCity);

// Current weather

function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentCity = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${currentCity}`;
  let displayedTemp = document.querySelector("#displayed-temp");
  displayedTemp.innerHTML = `${temperature}`;
}

function retrievePosition(position) {
  let apiKey = "df3cb55bcc566bfc15bd0510f52871eb";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showCurrentWeather);
}

function currentButton() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentWeather = document.querySelector("#current");
currentWeather.addEventListener("click", currentButton);

//let apiKey = "df3cb55bcc566bfc15bd0510f52871eb";
//let units = "metrics";
//let city = "Brussels";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Bonus Challenge
/*
function convertToFahrenheit() {
  event.preventDefault();
  let displayedTemp = document.querySelector("#displayed-temp");
  displayedTemp.innerHTML = 66;
}

function convertToCelsius() {
  event.preventDefault();
  let displayedTemp = document.querySelector("#displayed-temp");
  displayedTemp.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
*/
