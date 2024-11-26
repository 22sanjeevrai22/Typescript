import { useState } from "react";

interface MenuItem {
  title: string;
  route?: string;
  submenu?: MenuItem[];
}

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

const SettingDropdown = () => {
  // State to track open menus at each level
  const [openMenu, setOpenMenu] = useState<string[]>([]);

  const toggleMenu = (currentIndex: string) => {
    setOpenMenu(
      (prev) =>
        prev.includes(currentIndex)
          ? prev.filter((index) => index !== currentIndex) // Close the menu
          : [...prev, currentIndex] // Open the menu
    );
  };

  const notToggleMenu = (currentIndex: string) => {
    setOpenMenu((prev) => prev.filter((index) => index !== currentIndex));
  };

  const renderMenu = (menus: MenuItem[], parentIndex: string = "") => {
    return (
      <>
        {menus.map((menu, index) => {
          const currentIndex = parentIndex
            ? `${parentIndex}-${index}`
            : `${index}`;

          return (
            <div
              className="menu-item px-3"
              key={currentIndex}
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                toggleMenu(currentIndex);
              }}
              onMouseLeave={(e) => {
                e.stopPropagation();
                notToggleMenu(currentIndex);
              }}
            >
              <a href="#" className="menu-link px-3">
                <span className="menu-title">{menu.title}</span>
                {menu.submenu && <span className="menu-arrow" />}
              </a>

              {/* Show child menu if this menu is clicked */}
              {menu.submenu && openMenu.includes(currentIndex) && (
                <div
                  className="menu-submenu-card p-3 border rounded mt-2 bg-white shadow-lg"
                  style={{
                    position: "absolute",
                    left: "100%",
                    bottom: "0",
                    width: "14rem",
                  }}
                >
                  {renderMenu(menu.submenu, currentIndex)}{" "}
                  {/* Recursive rendering */}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px show"
      style={{
        zIndex: 107,
        position: "absolute",
        inset: "auto auto 0px 0px",
        margin: "0px",
        left: 110,
        bottom: 30,
      }}
    >
      <div className="menu-item px-3">
        <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
          Setting Menu
        </div>
      </div>
      {renderMenu(menuItems)} {/* Render the main menu */}
      <div className="separator mt-3 opacity-75" />
      <div className="menu-item px-3">
        <div className="menu-content px-3 py-3">
          <a className="btn btn-primary btn-sm px-4" href="#">
            Generate Reports
          </a>
        </div>
      </div>
    </div>
  );
};

export default SettingDropdown;
