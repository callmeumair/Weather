const apiKey = "cda3ca82864e45baa8c152157252204";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").innerText = `🌡 Temp: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `🌦 ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;

    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weatherCard").classList.add("hidden");
  }
}
