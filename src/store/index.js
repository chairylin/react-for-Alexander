import { createStore } from "../CustomeStore";

const initialState = {};

export const Actions = {
  AddDish: "addDish",
  RemoveDish: "removeDish",
};

const rootReducer = (state = initialState, action) => {
  switch (action?.type) {
    case Actions.AddDish: {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    }
    case Actions.RemoveDish: {
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] - 1 : 0,
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
