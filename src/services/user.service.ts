import IUser from "../interfaces/user.interface";
import { IRes, axiosUserService } from "./axios.service";
import { usersURLs } from "./configs/urls";

export const userService = {
  getAll: (): IRes<IUser[]> => axiosUserService.get(usersURLs.users),
  create: (user: IUser): IRes<IUser> =>
    axiosUserService.post(usersURLs.users, user),
};
