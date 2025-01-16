import { user_constants as constants } from "../../common/user_constants";

export const userLogin = (state = { userDetails: {} }, action) => {
  switch (action.type) {
    case constants.USER_LOGIN:
      return { loading: true };
    case constants.USER_LOGIN_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case constants.USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    case constants.USER_LOGIN_RESET:
      return { userDetails: {} };
    default:
      return state;
  }
};
