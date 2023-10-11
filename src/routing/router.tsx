import { createHashRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ForecastPage from "../pages/ResultPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.forecast(null),
        element: <ForecastPage />,
      },
    ],
  },
]);
