import React from "react";
import { useSelector } from "react-redux";

const Cars = () => {
  const { cars } = useSelector((store) => store.car);
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>{car.brand}</div>
      ))}
    </div>
  );
};

export default Cars;
