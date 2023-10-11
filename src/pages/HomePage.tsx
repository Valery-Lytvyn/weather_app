import useSearch from "../hooks/useSearch";
import SearchForm from "../components/SearchForm";
import ErrorPage from "./ErrorPage";

function HomePage() {
  const { inputValue, options, inputHandler, selectCityHandler, error } =
    useSearch();
  return (
    <>
      {!error ? (
        <>
          <p className="text-lg mt-2">
            Enter below the location whose weather you want to know
          </p>
          <SearchForm
            inputValue={inputValue}
            options={options}
            inputHandler={inputHandler}
            selectCityHandler={selectCityHandler}
          />
        </>
      ) : (
        <ErrorPage error={error} />
      )}
    </>
  );
}

export default HomePage;
