import IComment from "../interfaces/comment.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";
import { urls } from "./configs/urls";

export const commentService = {
  getAll: (): IRes<IComment[]> => axiosService.get(urls.comments),
};
