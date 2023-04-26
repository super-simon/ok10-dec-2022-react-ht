import { SubmitHandler, useForm } from "react-hook-form";
import { IPet } from "../../interfaces/pet.interface";
import { petValidator } from "../../validators/pet.validator";
import { joiResolver } from "@hookform/resolvers/joi";
import { IPetForm } from "../../interfaces/petForm.interface";
import { petsActions } from "../../reducers/pets.reducer";
import { useAppReducer } from "../../hooks/useAppReducer";

export default function CatForm() {
  const [state, dispatch] = useAppReducer((state: any) => state.pets);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<IPet>({
    mode: "all",
    resolver: joiResolver(petValidator),
  });

  const saveCat: SubmitHandler<IPetForm> = (form) => {
    dispatch(petsActions.addCat(form.name));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(saveCat)}>
      <input type="text" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}
      <button disabled={!isValid}>Add Cat</button>
    </form>
  );
}
