import simpsonsCharacterInterface from "../../interfaces/simpsonCharacter.interface";

export default function SimpsonsItem({
  character,
}: {
  character: simpsonsCharacterInterface;
}) {
  return (
    <>
      <img
        className="character__img"
        src={character.photo}
        alt={character.name + " " + character.surname}
      />
      <p>
        <span className="character__characteristicTitle">Name:</span>{" "}
        {character.name + " " + character.surname}
      </p>
      <p>
        <span className="character__characteristicTitle">Age:</span>{" "}
        {character.age}
      </p>
      <p>{character.info}</p>
    </>
  );
}
