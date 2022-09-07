import React, { useState } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
const Auth = () => {
  const [value, setvalue] = useState(<Register />);
  const RegisterHandler = () => {
    setvalue(<Register />);
  };
  const LoginHnadler = () => {
    setvalue(<Login />);
  };
  return (
    <div className="mt-[5rem] flex flex-col justify-center items-center">
      <div className="">
        <button onClick={RegisterHandler} className="hover:text-blue-500 m-4">
          Register
        </button>
        <button onClick={LoginHnadler} className="hover:text-blue-500 m-4">
          Login
        </button>
      </div>
      {value}
    </div>
  );
};

export default Auth;
