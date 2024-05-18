import { setToken, setUser , setDetail } from "../slices/auth.slice";
import { postRequest } from "../../config/axiosConfig";

export function loginUser(email, password) {
  return async (dispatch) => {
    try {
      const result = await postRequest("user/login", {
        email,
        password,
      });
      dispatch(setToken(result.data.token.accessToken));
      dispatch(setUser(result.data.user));
      dispatch(setDetail(result.data.userDetails));

      return result;
    } catch (error) {
      const errMsg = error?.response?.data
        ? error?.response?.data?.message
        : error;
      throw new Error(errMsg);
    }
  };
}
export function logoutAsync() {
  return async (dispatch) => {
    dispatch(setToken(""));
    dispatch(setUser({}));
    // dispatch({ type: "signout/logout" });
    return true;
  };
}
