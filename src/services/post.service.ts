import { urls } from "../constants/urls";
import { IPost } from "../interfaces/post.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";

export const postService = {
  getAll: (): IRes<IPost[]> => axiosService.get(urls.posts),
};
