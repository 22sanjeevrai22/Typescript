import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Students from "./pages/dashboard/Students";
import {
  EMPLOYEES_ROUTE,
  HOME_ROUTE,
  STUDENTS_ROUTE,
  LOGIN_ROUTE,
} from "./constants/routes";
import Login from "./pages/auth/Login";
import UnAuthLayout from "./layouts/UnAuthLayout";
import AuthLayout from "./layouts/AuthLayout";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={STUDENTS_ROUTE} element={<Students />} />
          <Route path={EMPLOYEES_ROUTE} element={<Students />} />
        </Route>
        <Route element={<UnAuthLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
