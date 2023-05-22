const User = ({ user }) => {
  const { id, name, surname } = user;
  return (
    <div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>surname: {surname}</div>
    </div>
  );
};

export { User };
