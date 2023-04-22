import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import "./CommentForm.css";
import IComment from "../../interfaces/comment.interface";
import { commentService } from "../../services/comment.service";
import { commentValidator } from "../../validators/comment.validator";

interface IProps {
  onSuccess: () => void;
  postId: number | string;
}

const CommentForm: FC<IProps> = ({ onSuccess, postId }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IComment>({
    mode: "all",
    resolver: joiResolver(commentValidator),
  });

  const save: SubmitHandler<IComment> = async (comment) => {
    await commentService
      .create(postId, comment)
      .then(() => {
        onSuccess();
        reset();
      })
      .catch(() => console.log("post error"));
  };

  return (
    <form onSubmit={handleSubmit(save)} className="form">
      <section className="form__group">
        <h2>Comment Details</h2>
        <div className="form__field">
          <label>Name*:</label>
          <input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form__field">
          <label>Email*:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form__field">
          <label>Body*:</label>
          <input type="text" {...register("body")} />
          {errors.body && <span>{errors.body.message}</span>}
        </div>
      </section>
      <button disabled={!isValid}>{"Create"}</button>
    </form>
  );
};

export default CommentForm;
