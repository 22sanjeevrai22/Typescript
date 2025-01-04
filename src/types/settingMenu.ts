type MenuItem = {
  title: string;
  submenu?: MenuItem[];
  route?: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Student Services",
    submenu: [
      {
        title: "Photographs",
        route: "",
      },
      {
        title: "Student Details",
        route: "",
      },
      {
        title: "Gate Pass",
        route: "",
      },
      {
        title: "ID Cards",
        route: "",
      },
      {
        title: "Single Print Certificate",
        route: "",
        submenu: [
          { title: "Transfer/Character", route: "" },
          { title: "SEE Character", route: "" },
        ],
      },
      {
        title: "Bulk Print Certificate",
        route: "",
        submenu: [
          { title: "Transfer/Character", route: "" },
          { title: "SEE Character", route: "" },
        ],
      },
    ],
  },
  {
    title: "Academic",
    submenu: [
      { title: "Academic Levels", route: "" },
      { title: "Academic Sessions", route: "" },
      { title: "Grades", route: "" },
      {
        title: "Routine",
        route: "",
        submenu: [
          { title: "Time Table", route: "" },
          { title: "Setup Routine", route: "" },
        ],
      },
    ],
  },
  {
    title: "Transportation",
    submenu: [
      { title: "Vehicles", route: "" },
      { title: "Routes", route: "" },
      { title: "Students", route: "" },
    ],
  },
  {
    title: "IEMIS",
    route: "",
    submenu: [
      {
        title: "Export Photograph",
        route: "",
      },
    ],
  },
];

export default menuItems;
