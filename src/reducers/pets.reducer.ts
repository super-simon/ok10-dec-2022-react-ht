import { IPet } from "../interfaces/pet.interface";

enum petsActionTypes {
  ADD_DOG = "ADD_DOG",
  ADD_CAT = "ADD_CAT",
  DELETE_DOG = "DELETE_DOG",
  DELETE_CAT = "DELETE_CAT",
}

const petsActions = {
  addCat: (cat: string) => ({ type: petsActionTypes.ADD_CAT, payload: cat }),
  addDog: (dog: string) => ({ type: petsActionTypes.ADD_DOG, payload: dog }),
  deleteCat: (id: string) => ({
    type: petsActionTypes.DELETE_CAT,
    payload: id,
  }),
  deleteDog: (id: string) => ({
    type: petsActionTypes.DELETE_DOG,
    payload: id,
  }),
};

type IPetsState = {
  cats: IPet[];
  dogs: IPet[];
};
type IPetsAction = {
  type: petsActionTypes;
  payload: string;
};

const petsInitialState = { cats: [], dogs: [] };

const petsReducer = (state: IPetsState, action: IPetsAction) => {
  switch (action.type) {
    case petsActionTypes.ADD_CAT:
      return {
        ...state,
        cats: [
          ...state.cats,
          { id: new Date().getTime().toString(), name: action.payload },
        ],
      };
    case petsActionTypes.ADD_DOG:
      return {
        ...state,
        dogs: [
          ...state.dogs,
          { id: new Date().getTime().toString(), name: action.payload },
        ],
      };
    case petsActionTypes.DELETE_CAT:
      return {
        ...state,
        cats: state.cats.filter((cat) => cat.id !== action.payload),
      };
    case petsActionTypes.DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== action.payload),
      };
    default:
      return state;
  }
};

export { petsActions, petsInitialState, petsReducer };
export type { IPetsState, IPetsAction };
