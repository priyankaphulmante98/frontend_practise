import {
  GET_LOGIN_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_SIGNUP_SUCCESS,
} from "./actionTypes";

const init = {
  products: [],
  auth: false,
  user: [],
};

export function ProductReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGIN_SUCCESS:
      return { ...state, auth: payload };

    case GET_SIGNUP_SUCCESS:
      return { ...state, user: [...state.user, payload] };

    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload };

    default:
      return state;
  }
}
