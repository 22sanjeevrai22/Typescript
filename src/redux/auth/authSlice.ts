import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./authActions";

type LoginResponse = {
  token: string;
};

type AuthState = {
  user: null | LoginResponse;
  loading: boolean;
  error: null | string;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("authToken");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null; // Clear error on success
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        // Checking if action.payload is set by rejectWithValue (AxiosError or string)
        if (action.payload) {
          state.error = action.payload as string; // or action.payload.message if AxiosError
        } else {
          state.error = action.error.message || "An unknown error occurred"; // Default message if no payload
        }
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
