import IPost from "../interfaces/post.interface";
import { IRes, axiosUserService } from "./axios.service";
import { usersURLs } from "./configs/urls";

export const postService = {
  getAll: (): IRes<IPost[]> => axiosUserService.get(usersURLs.posts),
  getById: (id: number): IRes<IPost> =>
    axiosUserService.get(`${usersURLs.posts}/${id}`),
  getByUserId: (id: number | string): IRes<IPost[]> =>
    axiosUserService.get(`${usersURLs.posts}/?userId=${id}`),
};
