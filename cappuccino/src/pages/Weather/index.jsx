import React, { useState } from "react";
import Navbar from "components/Navbar";

const fetchWeatherByCoordinates = async (lat, lon) => {
  const apiKey = "95e8293d0be7904e39dd9f4207272c54"; // Replace with your actual API key
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported by your browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lon: longitude });
      },
      (error) => {
        reject("Unable to retrieve location: " + error.message);
      }
    );
  });
};

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const { lat, lon } = await getCoordinates();
      const data = await fetchWeatherByCoordinates(lat, lon);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-300 flex flex-col font-inter gap-4 items-center justify-start mx-auto p-4 sm:px-5 w-full">
      <Navbar
        className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
        cicon="images/img_icon-Clogo.svg"
        weathericon="images/img_icon-weather.svg"
        hearticon="images/img_icon-heart.svg"
        homeicon="images/img_icon-home.svg"
        profileicon="images/img_icon-profile.svg"
      />

      <button
        onClick={handleFetchWeather}
        className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-700"
      >
        Get Weather in Your Area
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weather && (
        <>
          <div className="mt-4 text-center">
            <h1 className="text-2xl font-bold">
              Weather in {weather.city.name}, {weather.city.country}
            </h1>
          </div>

          <div className="mt-4 flex flex-row flex-wrap gap-4 justify-center">
            {weather.list.slice(0, 8).map((forecast, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                style={{ width: "180px", textAlign: "center" }}
              >
                <p className="text-lg font-bold">
                  {new Date(forecast.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                  className="w-16 h-16"
                />
                <p className="text-sm">{forecast.weather[0].description}</p>
                <p className="text-lg">Temp: {forecast.main.temp}°F</p>
                <p className="text-sm">Humidity: {forecast.main.humidity}%</p>
                {forecast.rain && (
                  <p className="text-sm">Precipitation: {forecast.rain["3h"]} mm</p>
                )}
                {forecast.snow && (
                  <p className="text-sm">Snow: {forecast.snow["3h"]} mm</p>
                )}
                <p className="text-sm">Wind: {forecast.wind.speed} mph</p>
                <p className="text-sm">
                  Visibility: {(forecast.visibility / 1609).toFixed(1)} miles
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
