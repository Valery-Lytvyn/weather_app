import { useRouteError } from "react-router-dom";
import { ErrorPageProps } from "../types";
import BackButton from "../components/BackButton";

function ErrorPage({ error }: ErrorPageProps) {
  let errorMessage;
  errorMessage = useRouteError();
  if (error) errorMessage = error;
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-2xl">Oops, something went wrong!</h1>

      <h2 className="text-3xl font-bold">{`"${errorMessage}"`}</h2>
      <p>
        We are currently experiencing some technical difficulties. Please try
        again later.
      </p>
      <BackButton />
    </div>
  );
}

export default ErrorPage;
