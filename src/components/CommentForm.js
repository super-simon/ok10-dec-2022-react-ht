import { useForm } from "react-hook-form";
import { commentService } from "../services";
import { useDispatch } from "react-redux";
import { commentActions } from "../redux";

const CommentForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const save = async (comment) => {
    const { data } = await commentService.create(comment);
    dispatch(commentActions.create({ comment: data }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <input type="text" placeholder={"name"} {...register("name")} />
      <input type="text" placeholder={"email"} {...register("email")} />
      <input type="text" placeholder={"body"} {...register("body")} />
      <button>Save</button>
    </form>
  );
};

export { CommentForm };
