import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CLEAR_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  INFO_UPDATE_ERROR,
  CLEAR_UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case GET_USER_ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case INFO_UPDATE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CLEAR_UPDATE_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case CLEAR_ERROR:
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};
