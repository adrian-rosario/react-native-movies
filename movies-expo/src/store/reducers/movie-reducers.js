import { movie_constants as constants } from "../../common/movie_constants";

export const movieList = (state = { movies: [] }, action) => {
  switch (action.type) {
    case constants.LIST_MOVIES:
      return { loading: true };
    case constants.LIST_MOVIES_SUCCESS:
      return { loading: false, movies: action.payload };
    case constants.LIST_MOVIES_FAILED:
      return { loading: false, error: action.payload };
    case constants.LIST_MOVIES_RESET:
      return { movies: [] };
    default:
      return state;
  }
};

export const movieListRandomRating = (
  state = { ratingDetails: {} },
  action
) => {
  switch (action.type) {
    case constants.MOVIE_LIST_RANDOM_RATING:
      return { loading: true };
    case constants.MOVIE_LIST_RANDOM_RATING_SUCCESS:
      return { loading: false, ratingDetails: action.payload };
    case constants.MOVIE_LIST_RANDOM_RATING_FAILED:
      return { loading: false, error: action.payload };
    case constants.MOVIE_LIST_RANDOM_RATING_RESET:
      return { ratingDetails: {} };
    default:
      return state;
  }
};

export const movieListRating = (state = { ratingDetails: {} }, action) => {
  switch (action.type) {
    case constants.MOVIE_LIST_ONE_RATING:
      return { loading: true };
    case constants.MOVIE_LIST_ONE_RATING_SUCCESS:
      return { loading: false, ratingDetails: action.payload };
    case constants.MOVIE_LIST_ONE_RATING_FAILED:
      return { loading: false, error: action.payload };
    case constants.MOVIE_LIST_ONE_RATING_RESET:
      return { ratingDetails: {} };
    default:
      return state;
  }
};

export const movieListRatings = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case constants.MOVIE_LIST_RATINGS:
      return { loading: true };
    case constants.MOVIE_LIST_RATINGS_SUCCESS:
      return { loading: false, reviews: action.payload };
    case constants.MOVIE_LIST_RATINGS_FAILED:
      return { loading: false, error: action.payload };
    case constants.MOVIE_LIST_RATINGS_RESET:
      return { reviews: {} };
    default:
      return state;
  }
};
