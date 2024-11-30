import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

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
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export { loginThunk };
