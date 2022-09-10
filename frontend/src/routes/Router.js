import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import CreatePost from "../pages/CreatePost";
import UserPost from "../pages/UserPost";
import UpdatePost from "../pages/UpdatePost";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/user" element={<UserPost />} />
      <Route path="/update-post" element={<UpdatePost />} />
    </Routes>
  );
};

export default Router;
