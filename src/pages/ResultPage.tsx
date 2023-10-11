import BackButton from "../components/BackButton";
import Forecast from "../components/Forecast";
import Loader from "../components/Loader";
import useForecast from "../hooks/useForecast";
import ErrorPage from "./ErrorPage";

function ResultPage(): JSX.Element {
  const { forecastData, isLoading, error } = useForecast();

  return (
    <>
      {forecastData && !isLoading && !error ? (
        <>
          <Forecast forecastData={forecastData} />
          <BackButton />
        </>
      ) : (
        <ErrorPage error={error} />
      )}
      {isLoading && <Loader />}
    </>
  );
}

export default ResultPage;
