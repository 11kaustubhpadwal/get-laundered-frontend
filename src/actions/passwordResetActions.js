import {
  CLEAR_FEEDBACK,
  PASSWORD_UPDATE_ERROR,
  PASSWORD_UPDATE_SUCCESS,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCESS,
  SET_LOADING,
  VERIFY_LINK_ERROR,
  VERIFY_LINK_SUCCESS,
} from "./types";

import axios from "axios";

// Send password reset link to the email address provided
export const sendEmail = (email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}api/users/forgot-password`,
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });

      dispatch({
        type: SEND_EMAIL_SUCCESS,
        payload: response.data.msg,
      });

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK });
      }, 8000);
    } catch (error) {
      if (error.response.data.errors !== undefined) {
        dispatch({
          type: SEND_EMAIL_ERROR,
          payload: error.response.data.errors[0].msg,
        });
      } else {
        dispatch({
          type: SEND_EMAIL_ERROR,
          payload: error.response.data.msg,
        });
      }

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK });
      }, 8000);
    }
  };
};

// Verify password reset link
export const verifyLink = (token) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "get",
        url:
          `${process.env.REACT_APP_BASE_URL}api/users/forgot-password/` + token,
      });

      dispatch({ type: VERIFY_LINK_SUCCESS, payload: response.data.msg });
    } catch (error) {
      dispatch({ type: VERIFY_LINK_ERROR, payload: error.response.data.msg });
    }
  };
};

// Update password
export const updatePassword = (token, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "patch",
        url:
          `${process.env.REACT_APP_BASE_URL}api/users/update-password/` + token,
        data: {
          password: password,
        },
      });

      dispatch({ type: PASSWORD_UPDATE_SUCCESS, payload: response.data.msg });
    } catch (error) {
      dispatch({
        type: PASSWORD_UPDATE_ERROR,
        payload: error.response.data.msg,
      });

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK });
      }, 8000);
    }
  };
};

// Set loading
export const setLoading = () => {
  return { type: SET_LOADING };
};
