import IPost from "../interfaces/post.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";
import { urls } from "./configs/urls";

export const postService = {
  getAll: (): IRes<IPost[]> => axiosService.get(urls.posts),
  getById: (id: number): IRes<IPost> => axiosService.get(urls.posts + "/" + id),
};
