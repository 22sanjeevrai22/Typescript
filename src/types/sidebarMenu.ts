import {
  EMPLOYEES_ROUTE,
  EXAMINATION_ROUTE,
  HOME_ROUTE,
  STUDENTS_ROUTE,
  GRADE_ROUTE,
} from "../constants/routes";

type Menu = MenuItem[];

type MenuItem = {
  route: string;
  name: string;
  label: string;
};

const sidebarMenu: Menu = [
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

const dashboardMenu: Menu = [
  {
    route: GRADE_ROUTE,
    name: "grade",
    label: "Grade",
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
  {
    route: EXAMINATION_ROUTE,
    name: "examination",
    label: "Examination",
  },
];

export { sidebarMenu, dashboardMenu };
