import { ICar } from "../interfaces/car.interface";
import { IRes, axiosCarsService } from "./axios.service";
import { carsUrls } from "./configs/urls";

const carService = {
  getAll: (): IRes<ICar[]> => axiosCarsService.get(carsUrls.cars),
  create: (car: ICar): IRes<ICar> => axiosCarsService.post(carsUrls.cars, car),
  updateById: (id: number, car: ICar): IRes<ICar> =>
    axiosCarsService.put(`${carsUrls}/${id}`, car),
  delete: (id: number): IRes<void> =>
    axiosCarsService.delete(`${carsUrls}/${id}`),
};

export { carService };
