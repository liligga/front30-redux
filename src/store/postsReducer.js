import axios from "axios";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

// action creator
// Middleware = Промежуточное программное обеспечение
// thunk
// dispatch(fetchPosts())
export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=15"
    );
    dispatch(
        { 
            type: "FETCH_POSTS_SUCCESS", 
            payload: response.data 
        }
    );
  };
};
