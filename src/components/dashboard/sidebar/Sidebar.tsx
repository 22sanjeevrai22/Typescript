import logo from "../../../assets/icons/logo.png";
import windows from "../../../assets/icons/windows.svg";

const Sidebar = () => {
  return (
    <div id="kt_aside" className="aside">
      <div
        className="aside-logo flex-column-auto pt-10 pt-lg-20"
        id="kt_aside_logo"
      >
        <a href="../../demo9/dist/index.html">
          <img src={logo} alt="Logo" className="h-90px" />
        </a>
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
            <div className="menu-item here show py-2">
              <span className="menu-link menu-center">
                <span className="menu-icon me-0">
                  <span className="svg-icon svg-icon-2x">
                    <img src={windows} alt="" />
                  </span>
                </span>
              </span>
              <div className="menu-sub menu-sub-dropdown py-4 w-200px w-lg-225px">
                <div className="menu-item">
                  <div className="menu-content">
                    <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                      Home
                    </span>
                  </div>
                </div>
                <div className="menu-item">
                  <a
                    className="menu-link active"
                    href="../../demo9/dist/index.html"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">Default</span>
                  </a>
                </div>
                <div className="menu-item">
                  <a
                    className="menu-link"
                    href="../../demo9/dist/dashboards/ecommerce.html"
                  >
                    <span className="menu-bullet">
                      <span className="bullet bullet-dot" />
                    </span>
                    <span className="menu-title">eCommerce</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="aside-footer flex-column-auto pb-5 pb-lg-10"
        id="kt_aside_footer"
      >
        <div
          className="d-flex flex-center w-100 scroll-px"
          title="Quick actions"
        >
          <button type="button" className="btn btn-custom">
            <span className="svg-icon svg-icon-2x">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  width={12}
                  height={2}
                  rx={1}
                  transform="matrix(-1 0 0 1 15.5 11)"
                  fill="currentColor"
                />
                <path
                  d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                  fill="currentColor"
                />
                <path
                  d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px">
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                Quick Actions
              </div>
            </div>
            <div className="separator mb-3 opacity-75" />
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Ticket
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Customer
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                <span className="menu-title">New Group</span>
                <span className="menu-arrow" />
              </a>
              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Admin Group
                  </a>
                </div>
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Staff Group
                  </a>
                </div>
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Member Group
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Contact
              </a>
            </div>
            <div className="separator mt-3 opacity-75" />
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary btn-sm px-4" href="#">
                  Generate Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
