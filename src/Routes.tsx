import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Students from "./pages/dashboard/Students";
import MainLayout from "./layouts/MainLayout";
import {
  EMPLOYEES_ROUTE,
  HOME_ROUTE,
  STUDENTS_ROUTE,
} from "./constants/routes";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={STUDENTS_ROUTE} element={<Students />} />
        <Route path={EMPLOYEES_ROUTE} element={<Students />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routes;
