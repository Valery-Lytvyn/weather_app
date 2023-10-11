import { ForecastItemTileProps } from "../types";

function ForecastItemTile({
  icon,
  title,
  value,
  description,
}: ForecastItemTileProps): JSX.Element {
  return (
    <section className="text-xs font-bold flex flex-col gap-2 items-center sm:items-start bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 px-2">
      <div className="flex items-center gap-2 text-sm font-bold">
        <img src={icon} alt={title} />
        <h4>{title}</h4>
      </div>
      <h3 className="text-lg">{value}</h3>
      <p className="text-xs font-bold">{description}</p>
    </section>
  );
}

export default ForecastItemTile;
