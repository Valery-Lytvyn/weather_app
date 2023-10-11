import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../constants";

function useForecast() {
  const { lat, lon } = useParams();
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = (lat: string, lon: string) => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const responseData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecastData(responseData);
      })
      .catch((error) => {
        setError(error.message);
      })

      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (lat !== undefined && lon !== undefined) {
      getWeatherData(lat, lon);
    }
  }, [lat, lon]);

  return {
    forecastData,
    isLoading,
    error,
  };
}
export default useForecast;
