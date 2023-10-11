import { degree, getHours, roundingNumber } from "../helper";
import { HourlyForecastProps } from "../types";

function HourlyForecast({ list }: HourlyForecastProps): JSX.Element {
  return (
    <div className="flex gap-4 overflow-x-scroll mt-4 mb-5 pb-4 w-100">
      {list.map(({ dt, weather, main }, index) => {
        const isNow = index === 0;
        const hour = isNow ? "Now" : getHours(dt);
        const icon = weather[0].icon;
        const temperature = degree(roundingNumber(main.temp));
        return (
          <div key={index} className="flex flex-col gap-2 ">
            <p> {hour}</p>
            {icon && (
              <div className="w-[32px] h-[32px]">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={`weather-icon-${weather[0].description}`}
                  loading="lazy"
                />
              </div>
            )}
            <p className="font-bold">{temperature}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HourlyForecast;
