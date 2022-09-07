import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/Blog/BlogSlice";
import AuthSlice from "../features/auth/AuthSlice";
const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;
