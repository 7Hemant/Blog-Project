import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, login, logout } from "../features/auth/AuthSlice";
const Form = (props) => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //ref
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();

  const FormHandler = (e) => {
    e.preventDefault();
    //register from handler logic
    if (props.register === true) {
      if (password.current.value !== password2.current.value) {
        console.log("password do not match");
      } else {
        const userData = {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        dispatch(register(userData));
      }
    } else {
      const userData = {
        email: email.current.value,
        password: password.current.value,
      };

      dispatch(login(userData));
    }
  };
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (isSuccess) {
    navigate("/");
  }
  return (
    <form
      className="border flex flex-col justify-center items-center border-red-200 w-11/12 sm:w-6/12 shadow rounded-md"
      onSubmit={FormHandler}
    >
      {props.register && (
        <div className="flex flex-col items-center m-2  w-9/12">
          <label htmlFor="name" className="text-red-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded w-full pl-3 focus:outline-none  "
            ref={name}
          />
        </div>
      )}
      <div className="flex items-center flex-col m-2 w-9/12">
        <label htmlFor="email" className="text-red-400">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border rounded w-full pl-3 focus:outline-none "
          ref={email}
        />
      </div>
      <div className="flex items-center flex-col m-2 w-9/12">
        <label htmlFor="password" className="text-red-400">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border rounded w-full pl-3 focus:outline-none"
          ref={password}
        />
      </div>
      {props.register && (
        <div className="flex items-center flex-col m-2 w-9/12">
          <label htmlFor="Confrimpassword" className="text-red-400">
            Confrim Password
          </label>
          <input
            type="password"
            name="Confrimpassword"
            id="Confrimpassword"
            className="border rounded w-full pl-3 focus:outline-none"
            ref={password2}
          />
        </div>
      )}
      <div className=" m-2">
        <button
          type="submit"
          className="px-2 py-1 bg-red-900 text-cyan-100 rounded transition-all hover:skew-y-2 hover:text-white-500 hover:bg-red-500"
        >
          {props.register === true ? "Register" : "login"}
        </button>
      </div>
    </form>
  );
};

export default Form;
