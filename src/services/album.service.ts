import IAlbum from "../interfaces/album.interface";
import { IRes } from "../types/IRes";
import axiosService from "./axios.service";
import { urls } from "./configs/urls";

export const albumService = {
  getAll: (): IRes<IAlbum[]> => axiosService.get(urls.albums),
};
