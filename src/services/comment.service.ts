import { urls } from "../constants/urls";
import { IComment } from "../interfaces/comment.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";

export const commentService = {
  getAll: (): IRes<IComment[]> => axiosService.get(urls.comments),
};
