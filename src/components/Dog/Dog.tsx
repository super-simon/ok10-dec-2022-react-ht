import { IReducers } from "../../hoc/Provider";
import { useAppReducer } from "../../hooks/useAppReducer";
import { IPet } from "../../interfaces/pet.interface";
import { petsActions } from "../../reducers/pets.reducer";

type IProps = { dog: IPet };

export default function Dog({ dog }: IProps) {
  const [, dispatch] = useAppReducer((state: IReducers) => state.pets);
  return (
    <div>
      {dog.name}{" "}
      <button onClick={() => dispatch(petsActions.deleteDog(dog.id))}>
        Delete
      </button>
    </div>
  );
}
