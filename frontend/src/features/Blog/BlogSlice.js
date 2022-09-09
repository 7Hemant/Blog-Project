import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogService from "./BlogServics";
const initialState = {
  blog: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createpost = createAsyncThunk(
  "create/post",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await BlogService.createPost(data, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getpost = createAsyncThunk("get/post", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await BlogService.getPost(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const updatepost = createAsyncThunk(
  "update/post",
  async (id, data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await BlogService.updatePost(id, data, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deletepost = createAsyncThunk(
  "delete/post",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await BlogService.deletePost(id, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.initialState = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createpost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createpost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createpost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getpost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getpost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(getpost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })

      .addCase(updatepost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updatepost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(updatepost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deletepost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletepost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(deletepost.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice;
