import { SubmitHandler, useForm } from "react-hook-form";
import { ICar } from "../interfaces/car.interface";
import { carService } from "../services/car.service";
import { FC, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { carValidator } from "./validators/car.validator";

interface IProps {
  setNeedToUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  carForUpdate: ICar | undefined;
}

const CarForm: FC<IProps> = ({ setNeedToUpdateList, carForUpdate }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<ICar>({ mode: "all", resolver: joiResolver(carValidator) });

  useEffect(() => {
    if (carForUpdate) {
      setValue("brand", carForUpdate.brand, { shouldValidate: true });
      setValue("price", carForUpdate.price, { shouldValidate: true });
      setValue("year", carForUpdate.year, { shouldValidate: true });
    }
  }, [carForUpdate]);

  const save: SubmitHandler<ICar> = async (car) => {
    await carService.create(car);
    setNeedToUpdateList((value) => !value);
    reset();
  };

  const update: SubmitHandler<ICar> = async (car) => {
    await carService.updateById(car.id, car);
    setNeedToUpdateList((value) => !value);
  };

  return (
    <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
      {/* <input
        type="text"
        placeholder="brand"
        {...register("brand", {
          pattern: {
            value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
            message: "Бренд лише з літер. Мін 1, макс 20 символів.",
          },
        })}
      />
      {errors.brand && <span>{errors.brand.message}</span>}
      <input
        type="text"
        placeholder="price"
        {...register("price", {
          valueAsNumber: true,
          min: { value: 0, message: "Min 0" },
          max: { value: 1000000, message: "Max 1000000" },
        })}
      />
      {errors.price && <span>{errors.price.message}</span>}
      <input
        type="text"
        placeholder="year"
        {...register("year", {
          valueAsNumber: true,
          min: { value: 1990, message: "Min 1990" },
          max: {
            value: new Date().getFullYear(),
            message: "Max " + new Date().getFullYear(),
          },
        })}
      />
      {errors.year && <span>{errors.year.message}</span>}
      <button disabled={!isValid}>{carForUpdate ? "Update" : "Create"}</button> */}

      <input type="text" placeholder="brand" {...register("brand")} />
      {errors.brand && <span>{errors.brand.message}</span>}
      <input type="text" placeholder="price" {...register("price")} />
      {errors.price && <span>{errors.price.message}</span>}
      <input type="text" placeholder="year" {...register("year")} />
      {errors.year && <span>{errors.year.message}</span>}
      <button disabled={!isValid}>{carForUpdate ? "Update" : "Create"}</button>
    </form>
  );
};

export default CarForm;
