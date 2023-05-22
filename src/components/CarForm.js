import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { carService } from "../services";
import { carActions } from "../redux";
import { useEffect } from "react";

const CarForm = () => {
  const dispatch = useDispatch();
  const { carForUpdate } = useSelector((state) => state.cars);
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (carForUpdate) {
      setValue("brand", carForUpdate.brand);
      setValue("price", carForUpdate.price);
      setValue("year", carForUpdate.year);
    }
  }, [carForUpdate]);

  const save = async (car) => {
    dispatch(carActions.create(car));
    reset();
  };

  const update = async (car) => {
    await carService.updateById(carForUpdate.id, car);
    dispatch(carActions.changeTrigger());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
      <input type="text" placeholder={"brand"} {...register("brand")} />
      <input type="text" placeholder={"year"} {...register("year")} />
      <input type="text" placeholder={"price"} {...register("price")} />
      <button>{carForUpdate ? "Update" : "Save"}</button>
    </form>
  );
};

export { CarForm };
