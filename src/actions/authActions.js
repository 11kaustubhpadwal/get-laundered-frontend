import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  INFO_UPDATE_ERROR,
  CLEAR_UPDATE_ERROR,
} from "./types";

// Get logged in user's profile
export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://get-laundered.herokuapp.com/api/auth",
        headers: { "x-auth-token": localStorage.getItem("token") },
      });

      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    } catch (error) {
      localStorage.removeItem("token");
      dispatch({ type: GET_USER_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 8000);
    }
  };
};

// Register a new user
export const registerUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://get-laundered.herokuapp.com/api/users",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });

      localStorage.setItem("token", response.data.token);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });

      dispatch(getUser());
    } catch (error) {
      localStorage.removeItem("token");
      dispatch({ type: REGISTER_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 8000);
    }
  };
};

// Login user
export const loginUser = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://get-laundered.herokuapp.com/api/auth",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });

      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });

      dispatch(getUser());
    } catch (error) {
      localStorage.removeItem("token");
      dispatch({ type: LOGIN_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 8000);
    }
  };
};

// Update personal details
export const updateInfo = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "patch",
        url: "https://get-laundered.herokuapp.com/api/users",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        data: formData,
      });

      dispatch(getUser());
    } catch (error) {
      dispatch({ type: INFO_UPDATE_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_UPDATE_ERROR });
      }, 8000);
    }
  };
};

// Logout
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };
};
