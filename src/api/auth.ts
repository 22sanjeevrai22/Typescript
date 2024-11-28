import axios from "axios";
import config from "../config/config";

type User = {
  username: string;
  password: string;
};

const login = async ({ username, password }: User) => {
  try {
    const userResponse = await axios.post("https://dummyjson.com/user/login", {
      username,
      password,
    });
    console.log("User in Auth.ts", userResponse);
    localStorage.setItem("authToken", userResponse.data?.token);
    localStorage.setItem("user", userResponse.data?.user);

    return userResponse;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export { login };
