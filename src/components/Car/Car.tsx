import { FC } from "react";
import { ICar } from "../../interfaces/car.interface";
import { FaRegEdit, FaWindowClose } from "react-icons/fa";
import "./Car.css";

interface IProps {
  car: ICar;
  prepareUpdateCarForm: (car: ICar) => void;
  deleteCar: (id: number) => void;
}

const Car: FC<IProps> = ({ car, prepareUpdateCarForm, deleteCar }) => {
  const { id, brand, price, year } = car;
  return (
    <div>
      <div className="car__brand">{brand}</div>
      <div>price: {price}</div>
      <div>year: {year}</div>
      <div className="car__buttons">
        <FaRegEdit onClick={() => prepareUpdateCarForm(car)} />
        <FaWindowClose onClick={() => deleteCar(id)} />
      </div>
    </div>
  );
};

export default Car;
