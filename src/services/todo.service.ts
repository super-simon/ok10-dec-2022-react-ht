import IToDo from "../interfaces/todo.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";
import { urls } from "./configs/urls";

export const todoService = {
  getAll: (): IRes<IToDo[]> => axiosService.get(urls.todos),
};
