import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Option } from "../types";
import { API_KEY } from "../constants";
import { ROUTES } from "../routing/routes";

function useSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getSearchOption = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    if (inputValue !== "") {
      getSearchOption(inputValue);
    }
  }, [inputValue]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const selectCityHandler = (option = options[0]) => {
    if (option) {
      const { name, lat, lon } = option;
      setOptions([]);
      setInputValue(name);
      navigate(ROUTES.forecast({ lat, lon }));
    }
  };

  return {
    inputValue,
    options,
    inputHandler,
    selectCityHandler,
    error,
  };
}

export default useSearch;
