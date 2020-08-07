import {
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
  CLEAR_TOASTS,
} from "../actions/types";

const initialState = {
  orders: [],
  getOrdersError: null,
  orderPlaced: null,
  orderCancelled: null,
  orderPlacingError: null,
  orderCancellingError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    case GET_ORDERS_ERROR: {
      return {
        ...state,
        getOrdersError: action.payload,
      };
    }
    case PLACE_ORDER_SUCCESS: {
      return {
        ...state,
        orderPlaced: action.payload,
      };
    }
    case PLACE_ORDER_ERROR: {
      return {
        ...state,
        orderPlacingError: action.payload,
      };
    }
    case CANCEL_ORDER_SUCCESS: {
      return {
        ...state,
        orderCancelled: action.payload,
      };
    }
    case CANCEL_ORDER_ERROR: {
      return {
        ...state,
        orderCancellingError: action.payload,
      };
    }
    case CLEAR_TOASTS: {
      return {
        ...state,
        getOrdersError: null,
        orderPlaced: null,
        orderCancelled: null,
        orderPlacingError: null,
        orderCancellingError: null,
      };
    }
    default:
      return state;
  }
};
