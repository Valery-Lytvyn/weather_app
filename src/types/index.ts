import { ChangeEvent } from "react";
export interface Option {
  name: string;
  lat: number;
  lon: number;
}

export interface SearchFormProps {
  inputValue: string;
  options: Option[];
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCityHandler: (arg?: Option) => void;
}

interface ListItem {
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    }
  ];
  wind: { deg: number; gust: number; speed: number };
  clouds: {
    all: number;
  };
  pop: number;
  visibility: number;
}
export interface ForecastData {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: ListItem[];
}

export interface ForecastProps {
  forecastData: ForecastData;
}

export interface HourlyForecastProps {
  list: ListItem[];
}

export interface SunTimeProps {
  time: number;
  icon: string;
}

export interface ForecastItemTileProps {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export interface ErrorPageProps {
  error?: string | null;
}
