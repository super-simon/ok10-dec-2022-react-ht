import IComment from "../interfaces/comment.interface";
import { IRes, axiosUserService } from "./axios.service";
import { usersURLs } from "./configs/urls";

export const commentService = {
  getAll: (): IRes<IComment[]> => axiosUserService.get(usersURLs.comments),
  create: (postId: number | string, comment: IComment): IRes<IComment> =>
    axiosUserService.post(`${usersURLs.posts}/${postId}/comments`, comment),
};
