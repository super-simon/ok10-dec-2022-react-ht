import rickAndMortyCharacterInterface from "../../interfaces/rickAndMortyCharacter.interface";
import RickAndMortyItem from "./RickAndMortyItem";

export default function RickAndMorty({
  data,
}: {
  data: rickAndMortyCharacterInterface[];
}) {
  return (
    <>
      <h2>Rick And Morty</h2>
      <div>
        <ul className="character__list">
          {data.map((character) => (
            <li className="character">
              <RickAndMortyItem character={character} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
