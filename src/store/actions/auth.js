import axios from "axios";
import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";
export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAICCgL06Yl9wCvKO6Cd088vAi_mtCsrSQ";
    if (isLogin) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAICCgL06Yl9wCvKO6Cd088vAi_mtCsrSQ";
    }
    const response = await axios.post(url, authData);
    const data = response.data;
    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );
    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("experationDate", expirationDate);
    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
}
export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("experationDate");
  return {
    type: AUTH_LOGOUT
  };
}
export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  };
}
export function authLogin() {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const experationDate = new Date(localStorage.getItem("experationDate"));
      if (experationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((experationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}
