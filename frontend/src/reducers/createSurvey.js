import { CREATE_SURVEY, ADD_QUESTION } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_SURVEY:
      return {
        ...state,
        data: action.payload
      };
    case ADD_QUESTION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
