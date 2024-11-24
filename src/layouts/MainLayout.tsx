import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
