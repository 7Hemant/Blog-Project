import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { reset, logout } from "../features/auth/AuthSlice";
const Header = () => {
  const [value, setValue] = useState("hidden");
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const toogleHandler = () => {
    value === "hidden" ? setValue("flex") : setValue("hidden");
  };
  const logoutHandler = () => {
    console.log("click");
    dispatch(logout());
  };
  return (
    <header className="flex border shadow fixed z-10  top-1 left-4  sm:top-2  sm:left-10 sm:right-12  rounded  w-11/12  justify-between items-center p-4  border-red-300 ">
      <div className="logo  ">
        <h1 className="text-red-500">Mern Project</h1>
      </div>
      <nav className="relative ">
        <ul
          className={`  ${value}  absolute right-[-2rem] top-10 bg-red-200  flex-col justify-center items-center border  h-[90vh] w-[100vw] sm:flex-row sm:flex sm:static sm:border-none sm:h-max sm:w-max sm:bg-inherit overflow-hidden`}
        >
          <li className="px-1 hover:text-red-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          {user ? (
            <button
              className="px-1 hover:text-red-500 cursor-pointer"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <li className="px-1 hover:text-red-500 cursor-pointer">
              <Link to="/auth">Auth</Link>
            </li>
          )}
        </ul>
        <div className="icon sm:hidden">
          <FaBars className="cursor-pointer" onClick={toogleHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
