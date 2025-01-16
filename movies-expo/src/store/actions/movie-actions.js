import { movie_constants as constants } from "../../common/movie_constants";
import axios from "axios";
import { common_constants as common } from "../../common/common_constants";

export const listMoviesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.LIST_MOVIES,
    });

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${common.BASE_URL}/api/movies`,
      configuration
    );

    dispatch({ type: constants.LIST_MOVIES_SUCCESS, payload: data });
    //
  } catch (error) {
    dispatch({
      type: constants.LIST_MOVIES_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listRandomRatingAction = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.MOVIE_LIST_RANDOM_RATING,
    });

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${common.BASE_URL}/api/rating/random/`,
      configuration
    );

    dispatch({
      type: constants.MOVIE_LIST_RANDOM_RATING_SUCCESS,
      payload: data,
    });
    //
  } catch (error) {
    dispatch({
      type: constants.MOVIE_LIST_RANDOM_RATING_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listRatingAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING,
    });

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${common.BASE_URL}/api/rating/${id}`,
      configuration
    );

    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING_SUCCESS,
      payload: data,
    });
    //
  } catch (error) {
    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listRatingsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING,
    });

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${common.BASE_URL}/api/ratings/for-movie/${id}`,
      configuration
    );

    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING_SUCCESS,
      payload: data,
    });
    //
  } catch (error) {
    dispatch({
      type: constants.MOVIE_LIST_ONE_RATING_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
