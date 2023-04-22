import { FC } from "react";
import { ICar } from "../interfaces/car.interface";
import { FaRegEdit, FaWindowClose } from "react-icons/fa";

interface IProps {
  car: ICar;
  setCarForUpdate: React.Dispatch<React.SetStateAction<ICar | undefined>>;
  deleteCar: (id: number) => void;
}

const Car: FC<IProps> = ({ car, setCarForUpdate, deleteCar }) => {
  const { id, brand, price, year } = car;
  return (
    <div>
      <div>brand: {brand}</div>
      <div>price: {price}</div>
      <div>year: {year}</div>
      <FaRegEdit onClick={() => setCarForUpdate(car)} />
      <FaWindowClose onClick={() => deleteCar(id)} />
    </div>
  );
};

export default Car;
