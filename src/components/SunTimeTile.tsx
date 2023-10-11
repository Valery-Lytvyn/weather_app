import { SunTimeProps } from "../types";
import { getTime } from "../helper";

function SunTimeTile({ time, icon }: SunTimeProps): JSX.Element {
  return (
    <div className="text-xs font-bold flex flex-col gap-2 items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 ">
      <img src={icon} alt="sun-icon" />
      <span>{getTime(time)}</span>
    </div>
  );
}

export default SunTimeTile;
