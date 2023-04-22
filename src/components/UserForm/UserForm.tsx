import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import "./UserForm.css";
import IUser from "../../interfaces/user.interface";
import { userService } from "../../services/user.service";
import { userValidator } from "../../validators/user.validator";

interface IProps {
  onSuccess: () => void;
}

const UserForm: FC<IProps> = ({ onSuccess }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUser>({ mode: "all", resolver: joiResolver(userValidator) });

  const save: SubmitHandler<IUser> = async (user) => {
    await userService
      .create(user)
      .then(() => {
        onSuccess();
        reset();
      })
      .catch(() => console.log("post error"));
  };

  return (
    <form onSubmit={handleSubmit(save)} className="form">
      <section className="form__group">
        <h2>Personal Details</h2>
        <div className="form__field">
          <label>Name*:</label>
          <input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form__field">
          <label>Username*:</label>
          <input type="text" {...register("username")} />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="form__field">
          <label>Email*:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form__field">
          <label>Phone:</label>
          <input type="text" {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className="form__field">
          <label>Website:</label>
          <input type="text" {...register("website")} />
          {errors.website && <span>{errors.website.message}</span>}
        </div>
      </section>

      <section className="form__group">
        <h2>Address</h2>
        <div className="form__field">
          <label>Street:</label>
          <input type="text" {...register("address.street")} />
          {errors.address?.street && (
            <span>{errors.address.street.message}</span>
          )}
        </div>
        <div className="form__field">
          <label>Suite:</label>
          <input type="text" {...register("address.suite")} />
          {errors.address?.suite && <span>{errors.address.suite.message}</span>}
        </div>
        <div className="form__field">
          <label>City:</label>
          <input type="text" {...register("address.city")} />
          {errors.address?.city && <span>{errors.address.city.message}</span>}
        </div>
        <div className="form__field">
          <label>Zipcode:</label>
          <input type="text" {...register("address.zipcode")} />
          {errors.address?.zipcode && (
            <span>{errors.address.zipcode.message}</span>
          )}
        </div>
        <div className="form__field">
          <label>Lat:</label>
          <input type="text" {...register("address.geo.lat")} />
          {errors.address?.geo?.lat && (
            <span>{errors.address.geo.lat.message}</span>
          )}
        </div>
        <div className="form__field">
          <label>Lng:</label>
          <input type="text" {...register("address.geo.lng")} />
          {errors.address?.geo?.lng && (
            <span>{errors.address.geo.lng.message}</span>
          )}
        </div>
      </section>

      <section className="form__group">
        <h2>Company Details</h2>
        <div className="form__field">
          <label>Company Name:</label>
          <input type="text" {...register("company.name")} />
          {errors.company?.name && <span>{errors.company.name.message}</span>}
        </div>
        <div className="form__field">
          <label>Company Catch Phrase:</label>
          <input type="text" {...register("company.catchPhrase")} />
          {errors.company?.catchPhrase && (
            <span>{errors.company.catchPhrase.message}</span>
          )}
        </div>
        <div className="form__field">
          <label>Company BS:</label>
          <input type="text" {...register("company.bs")} />
          {errors.company?.bs && <span>{errors.company.bs.message}</span>}
        </div>
      </section>

      <button disabled={!isValid}>{"Create"}</button>
    </form>
  );
};

export default UserForm;
