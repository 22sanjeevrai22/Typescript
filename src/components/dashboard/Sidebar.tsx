import logo from "../../assets/icons/logo.png";
import Icon from "../icons/Icon";
import MenuDropdown from "./dropdown/sidebar/MenuDropdown";
import dashboardMenu from "../../constants/dashboardMenu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SettingDropdown from "./dropdown/sidebar/SettingDropdown";
import { HOME_ROUTE } from "../../constants/routes";

type IsActiveProp = {
  isActive: boolean;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveLink = ({ isActive }: IsActiveProp) => {
    return ["menu-item py-2", isActive ? "here" : ""].join(" ");
  };
  function handleToggle() {
    console.log("settings clicked");
    setIsOpen((prev) => !prev);
  }
  return (
    <div id="kt_aside" className="aside">
      <div
        className="aside-logo flex-column-auto pt-10 pt-lg-20"
        id="kt_aside_logo"
      >
        <Link to={HOME_ROUTE}>
          <img src={logo} alt="Logo" className="h-90px" />
        </Link>
      </div>
      <div
        className="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10"
        id="kt_aside_menu"
      >
        <div
          id="kt_aside_menu_wrapper"
          className="w-100 hover-scroll-overlay-y scroll-ps d-flex"
        >
          <div
            id="kt_aside_menu"
            className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-400 menu-arrow-gray-400 fw-semibold fs-6 my-auto"
          >
            {dashboardMenu.map((menu) => (
              <NavLink
                to={menu.route}
                key={menu.route}
                className={handleActiveLink}
              >
                <span className="menu-link menu-center">
                  <span className="menu-icon me-0">
                    <Icon name={menu.name} className={"svg-icon-2x"} />
                  </span>
                </span>
              </NavLink>
            ))}
            <MenuDropdown />
          </div>
        </div>
      </div>
      {/* Setting Starts Here  */}
      <div
        className="aside-footer flex-column-auto pb-5 pb-lg-10"
        id="kt_aside_footer"
      >
        <div
          className="d-flex flex-center w-100 scroll-px"
          title="Quick actions"
        >
          <button
            type="button"
            onClick={handleToggle}
            className="btn btn-custom"
            style={{
              position: "relative",
            }}
          >
            <Icon name="settings" className={"svg-icon-2x m-0"} />
          </button>

          {isOpen && <SettingDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;