const initialState = {
  count: 100,
  name: 'John'
};

// {count: 100, name: 'John'}
// {type: 'INCREASE_COUNTER', payload: 1}
// {type: 'DECREASE_COUNTER'}
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {...state, count: state.count + action.payload};
    case "DECREASE_COUNTER":
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

// Action creators
export const increaseCounter = () => {
  return { type: "INCREASE_COUNTER" };
};

export const decraseCounter = () => {
  return { type: "DECREASE_COUNTER" };
};
