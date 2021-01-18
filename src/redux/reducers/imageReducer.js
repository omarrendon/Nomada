import { UPLOAD_IMAGE, CLEAR } from "../types/types";

const initialState = {
  imagen: null,
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        imagen: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        imagen: [],
      };
    default:
      return state;
  }
};
