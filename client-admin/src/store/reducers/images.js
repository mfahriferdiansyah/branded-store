import {
  EDITIMG_FETCH,
} from "../actions/actionType";

const initialState = {
  editImg: [],
};

export default function iamgesReducer(state = initialState, action) {
  switch (action.type) {
    case EDITIMG_FETCH:
      return {
        ...state,
        editImg: action.payload,
      };

    default:
      return state;
  }
}
