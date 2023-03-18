import {
  RESET_EDIT,
  SET_ISEDIT,
  SET_PATH,
  SET_ISMODAL
} from "../actions/actionType";

const initialState = {
  isEdit: false,
  isModal: false,
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

    case SET_ISMODAL:
      return {
        ...state,
        isModal: action.payload,
      };

    default:
      return state;
  }
}
