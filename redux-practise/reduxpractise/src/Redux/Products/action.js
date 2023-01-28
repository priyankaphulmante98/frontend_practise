import * as types from "./actionTypes";
import axios from "axios";
export const postUser = (form) => (dispatch) => {
  dispatch({ type: types.GET_SIGNUP_SUCCESS, payload: form });
};

export const Loginuser = (form, users) => (dispatch) => {
  const check = users.find(
    (e) => e.email === form.email && e.password === form.password
  );
  console.log(check);
  if (check) {
    dispatch({ type: types.GET_LOGIN_SUCCESS, payload: true });
    alert("user logged in");
  } else {
    dispatch({ type: types.GET_LOGIN_SUCCESS, payload: false });
    alert("wrong credentials");
  }
};

export const getProducts = () => (dispatch) => {
  axios("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) =>console.log(err));
};
