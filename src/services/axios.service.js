import axios from "axios";
import { carsAPI, jsonPlaceholderAPI } from "../constants";

const placeHolderAPIService = axios.create({ baseURL: jsonPlaceholderAPI });
const carAPIService = axios.create({ baseURL: carsAPI });

export { placeHolderAPIService, carAPIService };
