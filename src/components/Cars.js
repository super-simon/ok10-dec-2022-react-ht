import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carService } from "../services";
import { carActions } from "../redux";
import { Car } from "./Car";

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, trigger } = useSelector((state) => state.cars);

  useEffect(() => {
    carService
      .getAll()
      .then((result) => result.data)
      .then((value) => dispatch(carActions.setAll(value)));
  }, [dispatch, trigger]);

  return (
    <div>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export { Cars };
