import rickAndMortyCharacterInterface from "../interfaces/rickAndMortyCharacter.interface";

export default function RickAndMortyItem({
  character,
}: {
  character: rickAndMortyCharacterInterface;
}) {
  return (
    <>
      <img
        className="character__img"
        src={character.image}
        alt={character.name}
      />
      <p>
        <span className="character__characteristicTitle">Name:</span>{" "}
        {character.name}
      </p>
      <p>
        <span className="character__characteristicTitle">Origin:</span>{" "}
        {character.origin.name}
      </p>
      <p>
        <span className="character__characteristicTitle">Species:</span>{" "}
        {character.species}
      </p>
    </>
  );
}
