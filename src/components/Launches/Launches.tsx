import launchInterface from "../../interfaces/launch.interface";
import Launch from "../Launch/Launch";
import "./Launches.css";

export default function Launches({
  data,
  id,
}: {
  data: launchInterface[];
  id: string;
}) {
  return (
    <>
      <h2 id={id}>Starship Launches</h2>
      <ul className="launch__container">
        {data.map((launch) => (
          <li key={launch.flight_number} className="launch">
            <Launch launch={launch} />
          </li>
        ))}
      </ul>
    </>
  );
}
