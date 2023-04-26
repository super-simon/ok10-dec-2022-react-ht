import { useAppReducer } from "../../hooks/useAppReducer";
import { IReducers } from "../../hoc/Provider";
import { IPet } from "../../interfaces/pet.interface";
import Dog from "../Dog/Dog";
import DogForm from "../DogForm/DogForm";
import "./Dogs.css";

export default function Dogs() {
  const [state, dispatch] = useAppReducer((state: IReducers) => state.pets);

  return (
    <div className="dog__container">
      <h2>Dogs</h2>
      <DogForm />
      <ul className="dog__list">
        {state.dogs.map((dog: IPet) => (
          <li key={dog.id} className="dog__item">
            <Dog dog={dog} />
          </li>
        ))}
      </ul>
    </div>
  );
}
