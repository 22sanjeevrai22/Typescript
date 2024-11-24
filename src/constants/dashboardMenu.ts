import { EMPLOYEES_ROUTE, HOME_ROUTE, STUDENTS_ROUTE } from "./routes";

type MenuItem = {
  route: string;
  name: string;
  label: string;
};

type Menu = MenuItem[];

const dashboardMenu: Menu = [
  {
    route: HOME_ROUTE,
    name: "home",
    label: "Home",
  },
  {
    route: STUDENTS_ROUTE,
    name: "students",
    label: "Students",
  },
  {
    route: EMPLOYEES_ROUTE,
    name: "employees",
    label: "Employees",
  },
];

export default dashboardMenu;
