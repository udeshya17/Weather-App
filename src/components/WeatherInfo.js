import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const WeatherInfo = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=20984b62fedb4308924135351242905&q=${cityName}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (cityName) {
      fetchWeatherData();
    }
  }, [cityName]);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: 4,
        padding: 2,
        marginTop: 2,
      }}
    >
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </Box>
  );
};

export default WeatherInfo;
