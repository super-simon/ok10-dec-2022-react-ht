import { useEffect, useState } from "react";
import IAlbum from "../../interfaces/album.interface";
import { albumService } from "../../services/album.service";
import Album from "../../components/Album/Album";
import "./Albums.css";

export default function Albums() {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    albumService
      .getAll()
      .then((res) => res.data)
      .then((albums) => setAlbums(albums));
  }, []);

  return (
    <>
      <h1>Albums</h1>
      <ul className="album__list">
        {albums.map((album) => (
          <li className="album__item" key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
    </>
  );
}
