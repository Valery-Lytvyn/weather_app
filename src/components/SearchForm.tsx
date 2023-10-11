import { Option, SearchFormProps } from "../types";

function SearchForm({
  inputValue,
  options,
  inputHandler,
  selectCityHandler,
}: SearchFormProps): JSX.Element {
  return (
    <>
      <form
        className="flex mt-10 md:mt-4 relative"
        onSubmit={(e) => {
          e.preventDefault();
          selectCityHandler();
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={inputHandler}
          className="px-2 py-1 border-2  border-white rounded-l-md outline-sky-200"
        />
        <button
          type="submit"
          aria-label="Search button"
          className="px-2 py-1 border-2 rounded-r-md border-zinc-100 bg-transparent text-zinc-100 cursor-pointer hover:border-zinc-500 hover:text-zinc-500 "
        >
          search
        </button>
        {options.length > 0 && (
          <ul className="absolute top-9 flex flex-col  ml-1 bg-white rounded-b-md">
            {options.map((option: Option) => {
              const { name, lon, lat } = option;
              return (
                <li key={`${lat}${lon}`}>
                  <button
                    type="button"
                    aria-label="Select option button"
                    className="text-left text-sm w-full cursor-pointer px-2 py-1 hover:bg-zinc-700 hover:text-white"
                    onClick={() => selectCityHandler(option)}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </>
  );
}

export default SearchForm;
