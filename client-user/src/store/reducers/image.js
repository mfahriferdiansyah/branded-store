const intialState = {
  imagesList: []
}

export default function imageReducer(state = intialState, action) {
  switch (action.type) {
    case 'imagesList/fetchSuccess':
      return {
        ...state,
        imagesList: action.payload
      }

    default:
      return state
  }
}