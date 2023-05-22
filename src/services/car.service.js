import { urls } from "../constants";
import { carAPIService } from "./axios.service";

const carService = {
  getAll: () => carAPIService.get(urls.cars.cars),
  create: (car) => carAPIService.post(urls.cars.cars, car),
  updateById: (id, car) => carAPIService.put(urls.cars.byId(id), car),
  deleteById: (id) => carAPIService.delete(urls.cars.byId(id)),
};

export { carService };
