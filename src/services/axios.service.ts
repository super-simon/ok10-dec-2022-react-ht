import axios, { AxiosResponse } from "axios";
import { baseCarsURL } from "./configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>;

const axiosCarsService = axios.create({ baseURL: baseCarsURL });

export { axiosCarsService };

export type { IRes };
