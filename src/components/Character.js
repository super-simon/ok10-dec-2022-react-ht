const Character = ({ character }) => {
  const { id, name, status, image } = character;
  return (
    <div>
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>Status: {status}</div>
      <img src={image} alt={name} />
    </div>
  );
};

export { Character };
