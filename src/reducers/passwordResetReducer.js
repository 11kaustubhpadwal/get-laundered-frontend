import {
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_ERROR,
  CLEAR_FEEDBACK,
  VERIFY_LINK_ERROR,
  VERIFY_LINK_SUCCESS,
  PASSWORD_UPDATE_ERROR,
  PASSWORD_UPDATE_SUCCESS,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  emailSent: null,
  emailSendError: null,
  verifyLinkError: null,
  verifyLinkSuccess: null,
  passwordUpdateSuccess: null,
  passwordUpdateError: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        emailSent: action.payload,
        loading: false,
      };
    }
    case SEND_EMAIL_ERROR: {
      return {
        ...state,
        emailSendError: action.payload,
        loading: false,
      };
    }
    case VERIFY_LINK_SUCCESS: {
      return {
        ...state,
        verifyLinkSuccess: action.payload,
        loading: false,
      };
    }
    case VERIFY_LINK_ERROR: {
      return {
        ...state,
        verifyLinkError: action.payload,
        loading: false,
      };
    }
    case PASSWORD_UPDATE_SUCCESS: {
      return {
        ...state,
        passwordUpdateSuccess: action.payload,
        loading: false,
      };
    }
    case PASSWORD_UPDATE_ERROR: {
      return {
        ...state,
        passwordUpdateError: action.payload,
        loading: false,
      };
    }
    case CLEAR_FEEDBACK: {
      return {
        ...state,
        emailSent: null,
        emailSendError: null,
        passwordUpdateSuccess: null,
        passwordUpdateError: null,
        loading: false,
      };
    }
    default:
      return state;
  }
};
