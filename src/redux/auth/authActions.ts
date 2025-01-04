import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";
import { logOut } from "./authSlice";

type User = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

const loginThunk = createAsyncThunk<LoginResponse, User>(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("authToken", response.data?.token);
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // await logOut();
      await dispatch(logOut());
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Logout failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export { loginThunk, logOutThunk };
