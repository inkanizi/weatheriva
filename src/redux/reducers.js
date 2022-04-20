import { SET_DETAILS, SET_LOCATION } from "./actions";

  
const initialState = {
  location: "Adler",
  details: {}
}

export function weatherApp(state = initialState, action) {
    switch (action.type) {
      case SET_LOCATION:
        return Object.assign({}, state, {
          location: action.location
        })
        case SET_DETAILS:
          return Object.assign({}, state, {
            details: action.details
          })
      default:
        return state
    }
  }