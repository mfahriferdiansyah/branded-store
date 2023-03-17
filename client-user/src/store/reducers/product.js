const intialState = {
  productList: [],
  productDetail: {}
}

export default function productReducer(state = intialState, action) {
  switch (action.type) {
    case 'products/fetchSuccess':
      return {
        ...state,
        productList: action.payload
      }

    case 'productDetail/fetchSuccess':
      return {
        ...state,
        productDetail: action.payload
      }

    default:
      return state
  }
}