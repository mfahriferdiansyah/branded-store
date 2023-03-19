import { IMAGES_FETCH } from "../actions/actionType"

const intialState = {
  imagesList: []
}

export default function imageReducer(state = intialState, action) {
  switch (action.type) {
    case IMAGES_FETCH:
      return {
        ...state,
        imagesList: action.payload
      }

    default:
      return state
  }
}