import axios from "axios";
import { carsAPI } from "../constants";

const carAPIService = axios.create({ baseURL: carsAPI });

export { carAPIService };
