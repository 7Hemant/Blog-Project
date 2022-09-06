import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/Blog/BlogSlice";
const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
});

export default store;
