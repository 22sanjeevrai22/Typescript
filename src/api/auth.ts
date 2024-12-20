import axios from "axios";
import config from "../config/config";

type User = {
  email: string;
  password: string;
};

const login = async ({ email, password }: User) => {
  try {
    const userResponse = await axios.post(
      `${config.baseApiUrl}/api/login`,
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

    console.log("User Response in auth.ts", userResponse);

    return userResponse;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export { login };
