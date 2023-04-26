import { useContext } from "react";
import { StateContext } from "../hoc/Provider";

const useAppReducer = (state: any) => state(useContext(StateContext));

export { useAppReducer };
