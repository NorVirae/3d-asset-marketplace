import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  merchandiseStore: null,
  product: null,
};

const authReducer = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    signUp(state, action) {
      state.user = action.payload.user;
    },
    merchandiseStore(state, action) {
      state.merchandiseStore = action.payload.merchandiseStore;
    },
    products(state, action) {
      state.product = action.payload.product;
    },
    logout(state, action) {
      state.product = null;
      state.merchandiseStore = null;
      state.user = null;
    },
  },
});

export const { signUp, merchandiseStore, logout } = authReducer.actions;

export default authReducer.reducer;
