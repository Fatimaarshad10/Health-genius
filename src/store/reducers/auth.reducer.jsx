import { setToken, setUser } from "../slices/auth.slice";
import { postRequest } from "../../config/axiosConfig";

export function verifyUser(email, password) {
  return async (dispatch) => {
    try {
      const result = await postRequest("/login", {
        email,
        password,
      });
      dispatch(setToken(result.data.token.accessToken));
      dispatch(setUser(result.data.user));
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
    dispatch({ type: "signout/logout" });
    return true;
  };
}
