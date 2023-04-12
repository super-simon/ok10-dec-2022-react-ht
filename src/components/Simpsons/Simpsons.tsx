import simpsonsCharacterInterface from "../../interfaces/simpsonCharacter.interface";
import SimpsonsItem from "./SimpsonsItem";

export default function Simpsons({
  data,
}: {
  data: simpsonsCharacterInterface[];
}) {
  return (
    <>
      <h2>Simpsons</h2>
      <div>
        <ul className="character__list">
          {data.map((character) => (
            <li className="character">
              <SimpsonsItem character={character} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
