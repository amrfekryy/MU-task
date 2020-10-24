import { get, reduce, omit } from 'lodash'

// global mapDispatchToProps with dispatchers that match the general action handlers used in with the reducers
export const mapDispatchToProps = dispatch => {
  return {
    setMain: (reducerName, data) => dispatch({
      type: `set_main_${reducerName}`,
      data
    }),
    setPath: (reducerName, path, data) => dispatch({
      type: `set_path_${reducerName}`,
      path,
      data
    }),
  }
}

// general action handlers: common logic to be executed on a reducer when an action is dispatched
const generalActionHandlers = {
  set_main: (state, action) => ({ data: action.data }),
  set_path: (state, action) => ({ ...state, [action.path]: action.data }),
}

export function dynamicReducersCreator(reducerNames) {
  /**
   * takes a list of reducer names and returns an object of reducer functions
   */  
  return reduce(reducerNames, (reducers, reducerName) => {
    // create a copy of general action handlers for the reducer
    const reducerActionHandlers = reduce(generalActionHandlers, 
      (res, func, key) => ({ ...res, [`${key}_${reducerName}`]: func }), {})
    // create reducer function
    const reducerFunction = (state={}, action) => get(reducerActionHandlers, action.type, d=>d)(state, action)
    // add to final result
    return { ...reducers, [reducerName]: reducerFunction }
  }, {})
}
