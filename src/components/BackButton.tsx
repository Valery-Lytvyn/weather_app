import { NavLink } from "react-router-dom";
import { ROUTES } from "../routing/routes";

function BackButton(): JSX.Element {
  return (
    <NavLink to={ROUTES.index}>
      <button
        type="button"
        aria-label=" Back to search button"
        className="text-xs text-white font-bold flex flex-col gap-2 items-center sm:items-start bg-white/20 backdrop-blur-lg border-2 border-white rounded drop-shadow-lg py-4 px-2 my-4 hover:border-sky-200 hover:text-gray-700"
      >
        Back to search
      </button>
    </NavLink>
  );
}

export default BackButton;
