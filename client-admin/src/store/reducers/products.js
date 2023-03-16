import {
  EDITPRODUCT_FETCH,
  PRODUCT_FETCH,
} from "../actions/actionType";

const initialState = {
  productList: [],
  editProduct: {}
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FETCH:
      return {
        ...state,
        productList: action.payload,
      };

    case EDITPRODUCT_FETCH:
      return {
        ...state,
        editProduct: action.payload,
      };

    default:
      return state;
  }
}
