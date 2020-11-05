// sets the API key
let APIKey = "e01400ff6ef570d52c47db7d01afc1b6";

//Sets city to search
let searchBtn = $("#search-btn");
let citySearch = "";

searchBtn.on("click", function (event) {
  event.preventDefault();
  citySearch = $("#search-input").val().trim();

  // Here we are building the URL we need to query the database
  let queryURL1 =
    "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;

  // We then created an AJAX call
  $.ajax({
    url: queryURL1,
    method: "GET",
  }).then(function (response) {
    //log the resulting object
    console.log(response);
    //create lat and lon  and icon variables
    let lat = response.coord.lat;
    let lon = response.coord.lon;
    let weatherIcon = response.weather[0].icon;
    //create temperature variable and convert to fahrenheit
    let tempF = ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1);
    //create humidity and wind variables
    let humidity = response.main.humidity;
    let wind = response.wind.speed;
    console.log(lat, lon, weatherIcon, tempF, humidity, wind);

    // Create CODE HERE to transfer content to HTML
    $("#temp").text("Temperature: " + tempF);
    $("#humidity").text("Humidity: " + humidity + "%");
    $("#wind-speed").text("Wind Speed: " + wind + " mph");
  });
});
