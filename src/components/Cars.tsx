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

  const deleteCar = async (id: number) => {
    await carService.delete(id);
    setReloadCarsTrigger((value) => !value);
  };

  return (
    <div>
      <CarForm
        setReloadCarsTrigger={setReloadCarsTrigger}
        carForUpdate={carForUpdate}
      />
      <hr />
      {cars.map((car) => (
        <Car
          car={car}
          key={car.id}
          setCarForUpdate={setCarForUpdate}
          deleteCar={deleteCar}
        />
      ))}
    </div>
  );
};

export default Cars;
