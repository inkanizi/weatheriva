import { createStore } from 'redux'

function counterReducer(state = { location: "" }, action) {
  switch (action.type) {
    case 'setLocation':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))


store.dispatch({ type: 'counter/incremented' })

store.dispatch({ type: 'counter/decremented' })

export default store