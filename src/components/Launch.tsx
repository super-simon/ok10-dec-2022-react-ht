import launchInterface from "../interfaces/launch.interface";

export default function Launch({ launch }: { launch: launchInterface }) {
  return (
    <>
      <img
        className="launch__img"
        src={launch.links.mission_patch_small}
        alt={launch.mission_name}
      />
      <span className="launch__title">{launch.mission_name}</span>
      <span className="launch__year">{launch.launch_year}</span>
    </>
  );
}
