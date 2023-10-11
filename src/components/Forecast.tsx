import {
  degree,
  getHumidityValue,
  getPop,
  getVisibilityValue,
  getWindDirection,
  roundingNumber,
} from "../helper";
import sunriseIcon from "../assets/icons/icons8-sunrise-20.png";
import sunsetIcon from "../assets/icons/icons8-sunset-20.png";
import SunTime from "../components/SunTimeTile";
import ForecastItemTile from "../components/ForecastItemTile";
import windIcon from "../assets/icons/icons8-wind-20.png";
import feelsIcon from "../assets/icons/icons8-thermometer-20.png";
import humidityIcon from "../assets/icons/icons8-humidity-20.png";
import visibilityIcon from "../assets/icons/icons8-visibility-20.png";
import pressureIcon from "../assets/icons/icons8-pressure-20.png";
import precipitationIcon from "../assets/icons/icons8-rain-cloud-20.png";
import HourlyForecast from "../components/HourlyForecast";

import { ForecastProps } from "../types";

function Forecast({ forecastData }: ForecastProps): JSX.Element {
  const { name, country, sunrise, sunset, list } = forecastData;
  const today = list[0];
  const { main, wind, weather, pop, visibility, clouds } = today;

  const currentTemperature = degree(roundingNumber(main.temp));
  const minTemperature = degree(roundingNumber(main.temp_min));
  const maxTemperature = degree(roundingNumber(main.temp_max));
  const feelsLikeTemperature = degree(roundingNumber(main.feels_like));

  return (
    <div className="text-center pt-4 w-full">
      <section className="">
        <h2 className="text-2xl font-black">
          {name}
          <span className="font-thin pl-2">{country}</span>
        </h2>
        <p className="text-4xl font-extrabold">{currentTemperature}</p>
        <p className="text-sm">
          {weather[0].main} {weather[0].description}
        </p>
        <div className="flex justify-center gap-2 text-sm font-bold">
          <p>Min:{minTemperature}</p>
          <p>Max: {maxTemperature}</p>
        </div>
      </section>
      <HourlyForecast list={list} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-700">
        <SunTime time={sunrise} icon={sunriseIcon} />
        <SunTime time={sunset} icon={sunsetIcon} />
        <ForecastItemTile
          title="Wind"
          icon={windIcon}
          value={`${roundingNumber(wind.speed)} km/h`}
          description={`${getWindDirection(
            wind.deg
          )}, gusts: ${wind.gust.toFixed(1)} km/h`}
        />
        <ForecastItemTile
          title="Feels like"
          icon={feelsIcon}
          value={feelsLikeTemperature}
          description={`Feels ${
            feelsLikeTemperature.slice(0, -2) > currentTemperature.slice(0, -2)
              ? "warmer"
              : "colder"
          }`}
        />
        <ForecastItemTile
          title="Humidity"
          icon={humidityIcon}
          value={`${main.humidity}%`}
          description={`${getHumidityValue(main.humidity)}`}
        />
        <ForecastItemTile
          title="Pressure"
          icon={pressureIcon}
          value={`${main.pressure} hPa`}
          description={`${
            roundingNumber(main.pressure) < 1013 ? "Lower" : "Higher"
          } than standard`}
        />
        <ForecastItemTile
          title="Precipitation"
          icon={precipitationIcon}
          value={`${roundingNumber(pop * 1000) || "0"}%`}
          description={`${getPop(pop)}, ${clouds.all}%`}
        />
        <ForecastItemTile
          title="Visibility"
          icon={visibilityIcon}
          value={`${roundingNumber(visibility / 1000)}km`}
          description={getVisibilityValue(visibility)}
        />
      </div>
    </div>
  );
}

export default Forecast;
