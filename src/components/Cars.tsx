import { useEffect, useState } from "react";
import { ICar } from "../interfaces/car.interface";
import { carService } from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [reloadCarsTrigger, setReloadCarsTrigger] = useState<boolean>(true);
  const [carForUpdate, setCarForUpdate] = useState<ICar | undefined>();

  useEffect(() => {
    carService
      .getAll()
      .then((response) => response.data)
      .then((value) => setCars(value));
  }, [reloadCarsTrigger]);

  return (
    <div>
      <CarForm
        setNeedToUpdateList={setReloadCarsTrigger}
        carForUpdate={carForUpdate}
      />
      <hr />
      {cars.map((car) => (
        <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} />
      ))}
    </div>
  );
};

export default Cars;
