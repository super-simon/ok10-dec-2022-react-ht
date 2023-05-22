import { async } from "q";
import { useForm } from "react-hook-form";
import { userService } from "../services";
import { useDispatch } from "react-redux";
import { userActions } from "../redux";

const UserForm = () => {
  const { reset, register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const save = async (user) => {
    const { data } = await userService.create(user);
    dispatch(userActions.create(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(save)}>
      <input type="text" placeholder={"name"} {...register("name")} />
      <input type="text" placeholder={"surname"} {...register("surname")} />
      <button>Save</button>
    </form>
  );
};

export { UserForm };
