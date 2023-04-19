import launchInterface from "../interfaces/launch.interface";

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
            <img
              className="launch__img"
              src={launch.links.mission_patch_small}
              alt={launch.mission_name}
            />
            <span className="launch__title">{`${launch.mission_name} (${launch.launch_year})`}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
