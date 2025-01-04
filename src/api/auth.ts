import axios, { AxiosResponse } from "axios";
import config from "../config/config";

type User = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

const login = async ({
  email,
  password,
}: User): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const loginResponse = await axios.post(
      `${config.baseApiUrl}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Login Response in auth.ts in /api", loginResponse);

    return loginResponse;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const logout = () => {};

export { login };
