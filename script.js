$("#find-city").on("click", function (event) {
  event.preventDefault();
  var city = $("#city-input").val();
  var queryURL =
    "https://api.weatherstack.com/current?access_key=3aface5532f1f47c65a63094e3506f92&query=" +
    city +
    "&units=f";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".city").append(response.location.name);
    $(".date").append(response.location.localtime);
    $(".temp").append(response.current.temperature + "°F");
    $(".wind").append("Wind Speed:" + response.current.wind_speed);
    $(".humidity").append("Humidity:" + response.current.humidity + "%");
    $(".UV").append("UV Index:" + response.current.uv_index);
    var btn = $(".UV").addClass("btn btn-sm").text(response.value)
    if (response.value >= 2) {
     btn.addClass('btn-success')
    } else if (response.value >= 4) {
      btn.addClass('btn-warning');
    } else if (response.value >= 6) {
      btn.addClass('btn-danger');
    }
  });

  // event.preventDefault();
  var city = $("#city-input").val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=33c92b0552e0eea71460739025382726&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[0].weather[0].icon +
        ".png"
    );

    $(".day-5-date").append(response.list[8].dt_txt);
    $(".day-5-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[8].weather[0].icon +
        ".png"
    );
    $(".day-5-temp-max").append(
      "Max Temp:" + response.list[8].main.temp_max + "°F"
    );
    $(".day-5-temp-min").append(
      "Min Temp:" + response.list[8].main.temp_min + "°F"
    );
    $(".day-5-humidity").append(
      "Humidity:" + response.list[8].main.humidity + "%"
    );
    $(".day-4-date").append(response.list[16].dt_txt);
    $(".day-4-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[16].weather[0].icon +
        ".png"
    );
    $(".day-4-temp-max").append(
      "Max Temp:" + response.list[16].main.temp_max + "°F"
    );
    $(".day-4-temp-min").append(
      "Min Temp:" + response.list[16].main.temp_min + "°F"
    );
    $(".day-4-humidity").append(
      "Humidity:" + response.list[16].main.humidity + "%"
    );
    $(".day-3-date").append(response.list[24].dt_txt);
    $(".day-3-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[24].weather[0].icon +
        ".png"
    );
    $(".day-3-temp-max").append(
      "Max Temp:" + response.list[24].main.temp_max + "°F"
    );
    $(".day-3-temp-min").append(
      "Min Temp:" + response.list[24].main.temp_min + "°F"
    );
    $(".day-3-humidity").append(
      "Humidity:" + response.list[24].main.humidity + "%"
    );
    $(".day-2-date").append(response.list[32].dt_txt);
    $(".day-2-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[32].weather[0].icon +
        ".png"
    );
    $(".day-2-temp-max").append(
      "Max Temp:" + response.list[32].main.temp_max + "°F"
    );
    $(".day-2-temp-min").append(
      "Min Temp:" + response.list[32].main.temp_min + "°F"
    );
    $(".day-2-humidity").append(
      "Humidity:" + response.list[32].main.humidity + "%"
    );
    $(".day-1-date").append(response.list[39].dt_txt);
    $(".day-1-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[39].weather[0].icon +
        ".png"
    );
    $(".day-1-temp-max").append(
      "Max Temp:" + response.list[39].main.temp_max + "°F"
    );
    $(".day-1-temp-min").append(
      "Min Temp:" + response.list[39].main.temp_min + "°F"
    );
    $(".day-1-humidity").append(
      "Humidity:" + response.list[39].main.humidity + "%"
    );
  });
});
let recentSearches = [];
function searchFunction(data) {
  recentSearches.localStorage.setItem($("#city-input").val());
  $("#previous-search").append(recentSearches);

  var history =
    JSON.parse(window.localStorage.getItem($("#city-input").val())) || [];
  for (var i = 0; i < history.length; i++) {
    historyli(history[i])
  }

}

function historyli(text){
  var li= $('<li>').addClass("list-group-item list-group-item-action").text(text)
$("#previous-search") .append (li)
}