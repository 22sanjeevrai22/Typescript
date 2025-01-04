import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/depotLogo.png";
import Icon from "../icons/Icon";
import MenuDropdown from "./dropdown/sidebar/MenuDropdown";
import SettingDropdown from "./dropdown/sidebar/SettingDropdown";
import { HOME_ROUTE } from "../../constants/routes";
import { sidebarMenu } from "../../types/sidebarMenu";

type IsActiveProp = {
  isActive: boolean;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility umm
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown umm

  const handleActiveLink = ({ isActive }: IsActiveProp) => {
    return ["menu-item py-2", isActive ? "here" : ""].join(" ");
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the dropdown
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Close if clicking outside the dropdown
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {sidebarMenu.map((menu) => (
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
      {/* Setting Dropdown */}
      <div
        className="aside-footer flex-column-auto pb-5 pb-lg-10"
        id="kt_aside_footer"
        ref={dropdownRef} // Attach the ref to the container
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

          {isOpen && (
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <SettingDropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
