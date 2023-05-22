import React from "react";
import { CarForm, Cars } from "../components";
import { useSelector } from "react-redux";

const CarPage = () => {
  const { error, loading } = useSelector((state) => state.cars);
  return (
    <div>
      <CarForm />
      {error && <h2>{JSON.stringify(error)}</h2>}
      {loading && <h2>Loading</h2>}
      <Cars />
    </div>
  );
};

export { CarPage };
