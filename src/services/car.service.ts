import { ICar } from "../interfaces/car.interface";
import { IRes, axiosCarsService } from "./axios.service";
import { carsURLs } from "./configs/urls";

const carService = {
  getAll: (): IRes<ICar[]> => axiosCarsService.get(carsURLs.cars),
  create: (car: ICar): IRes<ICar> => axiosCarsService.post(carsURLs.cars, car),
  updateById: (id: number, car: ICar): IRes<ICar> =>
    axiosCarsService.put(`${carsURLs.cars}/${id}`, car),
  delete: (id: number): IRes<void> =>
    axiosCarsService.delete(`${carsURLs.cars}/${id}`),
};

export { carService };
