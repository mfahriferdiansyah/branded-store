import {combineReducers} from 'redux'
import imageReducer from './image'
import productReducer from './product'

const rootReducer = combineReducers({
  images: imageReducer,
  products: productReducer
})

export default rootReducer