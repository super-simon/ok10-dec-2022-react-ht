import { urls } from "../constants";
import { axiosService } from "./axios.service";

const characterService = {
  getAll: (page = 1) => axiosService.get(urls.characters, { params: { page } }),
};

export { characterService };
