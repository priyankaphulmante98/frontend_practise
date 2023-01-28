import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginuser } from "../Redux/Products/action";


const init = {

  email: "",
  password: "",
};
function Login() {
 
  const [form, setForm] = useState(init);
  const userdata=useSelector(store=>store.ProductReducer.user)
  const dispatch = useDispatch()
  // console.log(userdata)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
dispatch(Loginuser(form,userdata))
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
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

export default Login;
