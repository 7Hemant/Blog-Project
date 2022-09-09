import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Auth from "../pages/Auth";
import CreatePost from "../pages/CreatePost";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
};

export default Router;
