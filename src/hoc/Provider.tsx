import { createContext, useReducer } from "react";
import {
  IPetsAction,
  IPetsState,
  petsInitialState,
  petsReducer,
} from "../reducers/pets.reducer";

type IReducers = {
  pets: [IPetsState, React.Dispatch<IPetsAction>];
};

const StateContext = createContext<null | IReducers>(null);

function Provider({ children }: { children: React.ReactNode }) {
  const reducers = {
    pets: useReducer(petsReducer, petsInitialState),
  };
  return (
    <StateContext.Provider value={reducers}>{children}</StateContext.Provider>
  );
}

export { Provider, StateContext };
export type { IReducers };
