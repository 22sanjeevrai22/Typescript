import { Navigate, Outlet } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";

type AuthState = {
  user: null | {};
};
type RootState = {
  auth: AuthState;
};
const UnAuthLayout = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return <>{user ? <Navigate to={HOME_ROUTE} replace /> : <Outlet />}</>;
};

export default UnAuthLayout;
