import IAlbum from "../../interfaces/album.interface";

interface IProps {
  album: IAlbum;
}

export default function Album({ album: { id, userId, title } }: IProps) {
  return (
    <div className="album">
      <div>id: {id}</div>
      <div>userId: {userId}</div>
      <div>{title}</div>
    </div>
  );
}
