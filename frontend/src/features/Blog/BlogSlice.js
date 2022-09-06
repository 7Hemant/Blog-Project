import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  blog: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const createpost = createAsyncThunk(async (data, thunkAPI) => {});
const getpost = createAsyncThunk(async (data, thunkAPI) => {});
const updatepost = createAsyncThunk(async (data, thunkAPI) => {});
const deletepost = createAsyncThunk(async (data, thunkAPI) => {});
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
      .addCase(
        (createpost.pending = (state, action) => {
          state.isLoading = true;
        })
      )
      .addCase(
        (createpost.fulfilled = (state, action) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.blog = action.payload;
        })
      )
      .addCase(
        (createpost.rejected = (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
        })
      )
      .addCase(
        (getpost.pending = (state, action) => {
          state.isLoading = true;
        })
      )
      .addCase(
        (getpost.fulfilled = (state, action) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.blog = action.payload;
        })
      )
      .addCase(
        (getpost.rejected = (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
        })
      )
      .addCase(
        (updatepost.pending = (state, action) => {
          state.isLoading = true;
        })
      )
      .addCase(
        (updatepost.fulfilled = (state, action) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.blog = action.payload;
        })
      )
      .addCase(
        (updatepost.rejected = (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
        })
      )
      .addCase(
        (deletepost.pending = (state, action) => {
          state.isLoading = true;
        })
      )
      .addCase(
        (deletepost.fulfilled = (state, action) => {
          state.isSuccess = true;
          state.isLoading = false;
          state.blog = action.payload;
        })
      )
      .addCase(
        (deletepost.rejected = (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload;
        })
      );
  },
});

export default blogSlice;
