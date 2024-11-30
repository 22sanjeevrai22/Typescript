import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { LOGIN_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";

type AuthState = {
  user: null | {};
};
type RootState = {
  auth: AuthState;
};

const AuthLayout = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  // const token = localStorage.getItem("authToken");

  return (
    <>
      {user ? (
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-row flex-column-fluid">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={LOGIN_ROUTE} replace />
      )}
    </>
  );
};

export default AuthLayout;
