import { modelReducer, formReducer } from 'react-redux-form';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return {
        ...state,
        count: (state.count || 0) + 1
      }
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: action.tasks
      }
  }
  return state
}

const formInitState = {
  task : ''
};

export const form = modelReducer('form', formInitState);
export const formForm = formReducer('form', formInitState);
