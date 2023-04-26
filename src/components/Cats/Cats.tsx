import CatForm from "../CatForm/CatForm";
import { useAppReducer } from "../../hooks/useAppReducer";
import { IReducers } from "../../hoc/Provider";
import { IPet } from "../../interfaces/pet.interface";
import Cat from "../Cat/Cat";
import "./Cats.css";

export default function Cats() {
  const [state, dispatch] = useAppReducer((state: IReducers) => state.pets);

  return (
    <div className="cat__container">
      <h2>Cats</h2>
      <CatForm />
      <ul className="cat__list">
        {state.cats.map((cat: IPet) => (
          <li key={cat.id} className="cat__item">
            <Cat cat={cat} />
          </li>
        ))}
      </ul>
    </div>
  );
}
