import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../Redux/Products/action";
import { GET_SIGNUP_SUCCESS } from "../Redux/Products/actionTypes";

const init = {
  name: "",
  email: "",
  password: "",
};
function Signup() {
  const store = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState(init);

  console.log(store);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postUser(form));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
