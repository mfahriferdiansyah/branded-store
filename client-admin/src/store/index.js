import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer)

export default store