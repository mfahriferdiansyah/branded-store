import {
  RESET_EDIT,
  SET_ISEDIT,
  SET_ISMODAL,
  SET_ISLOADING,
  SET_ISMODALLOADING,
  SET_FETCHDATA
} from "../actions/actionType";

const initialState = {
  isEdit: false,
  isModal: false,
  isLoading: false,
  isModalLoading: false,
  fetchData: []
};

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_EDIT:
      return {
        ...state,
        editImg: [],
        editProduct: {},
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

    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_ISMODALLOADING:
      return {
        ...state,
        isModalLoading: action.payload,
      };

    case SET_FETCHDATA:
      return {
        ...state,
        fetchData: action.payload,
      };

    default:
      return state;
  }
}
