// sets the API key
let APIKey = "e01400ff6ef570d52c47db7d01afc1b6";

//Sets city to search
let searchBtn = $("#search-btn");
let citySearch = "";

searchBtn.on("click", function (event) {
  event.preventDefault();
  citySearch = $("#search-input").val().trim();
  console.log(citySearch);
});

// Here we are building the URL we need to query the database
// let queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// // We then created an AJAX call
// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   // Create CODE HERE to Log the queryURL
//   // Create CODE HERE to log the resulting object
//   // Create CODE HERE to calculate the temperature (converted from Kelvin)
//   // Create CODE HERE to transfer content to HTML
//   // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//   // Create CODE HERE to dump the temperature content into HTML
// });
