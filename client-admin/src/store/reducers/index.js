import { combineReducers } from 'redux'
import categoriesReducer from './categories'
import generalReducer from './general'
import imagesReducer from './images'
import productsReducer from './products'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  general: generalReducer,
  images: imagesReducer,
  products: productsReducer
})

export default rootReducer