import axios from "axios";
import config from "../config/config";

type User = {
  email: string;
  password: string;
};

const login = async ({ email, password }: User) => {
  const username = email;
  try {
    const userResponse = await axios.post("https://dummyjson.com/user/login", {
      username,
      password,
    });
    console.log("User in Auth.ts", userResponse);
    localStorage.setItem("authToken", userResponse.data?.refreshToken);
    localStorage.setItem("user", userResponse.data?.username);

    return userResponse;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export { login };
