import { useEffect, useState } from "react";
import { ICar } from "../../interfaces/car.interface";
import { carService } from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import { FaPlusSquare } from "react-icons/fa";
import "./Cars.css";

const Cars = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [reloadCarsTrigger, setReloadCarsTrigger] = useState<boolean>(true);
  const [carForUpdate, setCarForUpdate] = useState<ICar | undefined>();
  const [showAddNewCarForm, setShowAddNewCarForm] = useState<boolean>(false);

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

  const prepareUpdateCarForm = (car: ICar) => {
    setShowAddNewCarForm(true);
    setCarForUpdate(car);
  };

  const addCarButton = () => {
    setShowAddNewCarForm(true);
    setCarForUpdate(undefined);
  };

  return (
    <div>
      <h2 id="cars">Cars</h2>
      <FaPlusSquare onClick={addCarButton} />
      {showAddNewCarForm && (
        <CarForm
          setReloadCarsTrigger={setReloadCarsTrigger}
          carForUpdate={carForUpdate}
        />
      )}
      <hr />
      <ul className="car__list">
        {cars.map((car) => (
          <li key={car.id} className="car__list-item">
            <Car
              car={car}
              prepareUpdateCarForm={prepareUpdateCarForm}
              deleteCar={deleteCar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
