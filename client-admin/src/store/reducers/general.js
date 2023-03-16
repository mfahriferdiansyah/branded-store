import {
  RESET_EDIT,
  SET_ISEDIT,
  SET_PATH,
} from "../actions/actionType";

const initialState = {
  isEdit: false,
  pathNow: "",
};

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_EDIT:
      return {
        ...state,
        editImg: [],
        editProduct: {},
      };

    case SET_PATH:
      return {
        ...state,
        pathNow: action.payload,
      };

    case SET_ISEDIT:
      return {
        ...state,
        isEdit: action.payload,
      };

    default:
      return state;
  }
}
