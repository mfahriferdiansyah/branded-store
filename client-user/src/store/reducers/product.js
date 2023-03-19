import { PRODUCT_DETAIL, PRODUCT_FETCH, SET_ISLOADING } from "../actions/actionType"

const intialState = {
  productList: [],
  productDetail: {},
  isLoading: false
}

export default function productReducer(state = intialState, action) {
  switch (action.type) {
    case PRODUCT_FETCH:
      return {
        ...state,
        productList: action.payload
      }

    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      }

    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}