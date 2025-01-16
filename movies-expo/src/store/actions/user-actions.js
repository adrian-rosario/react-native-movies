import { user_constants as constants } from "../../common/user_constants";
import axios from "axios";
import { common_constants } from "../../common/common_constants";

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_LOGIN,
    });

    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${common_constants.BASE_URL}/user/token/`,
      {
        username: email,
        password: password,
      },
      configuration
    );

    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const userLogoutAction = () => (dispatch) => {
  // state cleanup
  dispatch({ type: constants.USER_LOGIN_RESET });
};
