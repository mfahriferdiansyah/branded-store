import { legacy_createStore as createStore } from 'redux'

const initialState = { productList: [], categoryList: [], isEdit: false, editImg: [], editProduct: {}, pathNow: '' }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'product/fetchSuccess':
      return {
        ...state,
        productList: action.payload
      }

    case 'category/fetchSuccess':
      return {
        ...state,
        categoryList: action.payload
      }

    case 'isEdit/assign':
      return {
        ...state,
        isEdit: action.payload
      }

    case 'pathNow/assign':
      return {
        ...state,
        pathNow: action.payload
      }

    case 'editProduct/fetchSuccess':
      return {
        ...state,
        editProduct: action.payload
      }

    case 'editImg/fetchSuccess':
      return {
        ...state,
        editImg: action.payload
      }

    case 'resetEdit':
      return {
        ...state,
        editImg: [],
        editProduct: {}
      }

    default:
      return state
  }
}

let store = createStore(rootReducer)

export default store