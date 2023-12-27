const initialState = {
  items: [],
};

// const add = (a, b) => a + b;
// {type: 'ADD_TODO', payload: 'Learn Redux'}
// {type: 'REMOVE_TODO', payload: 'Learn Redux'}
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_TODO":
      return { ...state, items: state.items.filter(item => item !== action.payload) }
    default:
      return state;
  }
};

// Action creators
// dispatch(addTodo("Learn Redux"));
export const addTodo = (payload) => {
  return { type: "ADD_TODO", payload };
};

export const removeTodo = (payload) => {
  return { type: "REMOVE_TODO", payload };
};
