import { SET_LOCATION } from "./actions";

const initialState = {location: "Dubai"}

export function weatherApp(state = initialState, action) {
    switch (action.type) {
      case SET_LOCATION:
        return Object.assign({}, state, {
          location: action.location
        })
      default:
        return state
    }
  }