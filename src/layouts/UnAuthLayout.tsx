import { Navigate, Outlet } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";

type LoginResponse = {
  token: string;
};

type AuthState = {
  user: null | LoginResponse;
  loading: boolean;
  error: null | string;
};

type RootState = {
  auth: AuthState;
};

const UnAuthLayout = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return <>{user ? <Navigate to={HOME_ROUTE} replace /> : <Outlet />}</>;
};

export default UnAuthLayout;
