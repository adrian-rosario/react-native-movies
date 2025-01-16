import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userLogin } from "./reducers/user-reducers";
import {
  movieList,
  movieListRandomRating,
  movieListRating,
  movieListRatings,
} from "./reducers/movie-reducers";

const reducer = combineReducers({
  userLogin,
  movieList,
  movieListRandomRating,
  movieListRating,
  movieListRatings,
});

const initialState = { userLogin: { userDetails: {} } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
