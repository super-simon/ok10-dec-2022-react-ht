import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterService } from "../services";
import { characterActions } from "../redux";
import { Character } from "./Character";
import { useSearchParams } from "react-router-dom";

const Characters = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);
  const [query, setQuery] = useSearchParams({ page: "1" });

  useEffect(() => {
    if (!query.get("page")) {
      setQuery((prev) => ({ ...prev, page: "1" }));
    }
  }, []);

  useEffect(() => {
    characterService
      .getAll(+query.get("page"))
      .then((value) => value.data)
      .then((value) => dispatch(characterActions.setCharacters(value)));
  }, [query]);

  return (
    <div>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export { Characters };
