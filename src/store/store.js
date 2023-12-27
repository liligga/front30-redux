import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { countReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { todosReducer } from "./todosReducer";
import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({
    count: countReducer,
    user: userReducer,
    todos: todosReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
