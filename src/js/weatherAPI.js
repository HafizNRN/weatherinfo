const apikey = "1b488e34ed98363af2ee02532c22538a";
let search = document.getElementById("search-location");
search.addEventListener("keydown", (event) => {
  event.preventDefault();

  let icon = document.querySelector("#weather-icon img");
  let temp = document.getElementById("temp-data");
  let country = document.getElementById("country-data");
  let humidity = document.getElementById("humidity-data");
  let wind = document.getElementById("wind-data");

  if (event.key === "Enter") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apikey}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        icon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
        temp.innerHTML = `${response.main.temp}`;
        country.innerHTML = `${response.sys.country}`;
        humidity.innerHTML = `${response.main.humidity}`;
        wind.innerHTML = `${response.wind.speed}`;
      })
      .catch((error) => {
        console.error(error);
      });

    search.value = "";
  }
});
