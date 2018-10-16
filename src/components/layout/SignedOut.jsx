import React from "react";
import { NavLink } from "react-router-dom";

const SignedInOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
      <li />
    </ul>
  );
};
export default SignedInOut;
