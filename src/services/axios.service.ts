import axios, { AxiosResponse } from "axios";
import { baseCarsURL, baseUsersURL } from "./configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>;

const axiosUserService = axios.create({ baseURL: baseUsersURL });

const axiosCarsService = axios.create({ baseURL: baseCarsURL });

export { axiosCarsService, axiosUserService };

export type { IRes };
