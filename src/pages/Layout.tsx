import { Outlet } from "react-router-dom";
function Layout(): JSX.Element {
  return (
    <main
      className="flex justify-center items-center w-full min-h-[100vh] bg-gradient-to-br from-stone-400 via-sky-400
     to-stone-400"
    >
      <section className="w-full md:max-w-[500px] min-h-full sm:min-h-[500px] flex flex-col justify-center items-center text-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700 p-4 md:px-10 lg:p-24  ">
        <h1 className="text-4xl font-thin">
          Weather
          <span className="font-black pl-2">Forecast</span>
        </h1>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
