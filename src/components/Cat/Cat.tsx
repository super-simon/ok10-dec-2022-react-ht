import { IReducers } from "../../hoc/Provider";
import { useAppReducer } from "../../hooks/useAppReducer";
import { IPet } from "../../interfaces/pet.interface";
import { petsActions } from "../../reducers/pets.reducer";

type IProps = { cat: IPet };

export default function Cat({ cat }: IProps) {
  const [state, dispatch] = useAppReducer((state: IReducers) => state.pets);
  return (
    <div>
      {cat.name}{" "}
      <button onClick={() => dispatch(petsActions.deleteCat(cat.id))}>
        Delete
      </button>
    </div>
  );
}
