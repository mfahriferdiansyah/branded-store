import {
  CATEGORY_FETCH,
  EDITCATEGORY_FETCH,
} from "../actions/actionType";

const initialState = {
  categoryList: [],
  editCategory: {},
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH:
      return {
        ...state,
        categoryList: action.payload,
      };

    case EDITCATEGORY_FETCH:
      return {
        ...state,
        editCategory: action.payload,
      };

    default:
      return state;
  }
}
