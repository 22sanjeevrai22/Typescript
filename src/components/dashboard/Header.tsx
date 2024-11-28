// import searchsvg from "../../../public/media/icons/duotune/abstract/abs001.svg";
import NotificationDropdown from "./dropdown/header/NotificationDropdown";
import ProfileDropdown from "./dropdown/header/ProfileDropdown";
import DarkLightModeDropdown from "./dropdown/header/DarkLightModeDropdown";
import Search from "../search/Search";
import Icon from "../icons/Icon";
type HeaderProps = {
  title: string;
  subTitle: string;
};
const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <>
      <div id="kt_header" className="header py-6 py-lg-0">
        <div className="header-container container-xxl">
          <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
            <h1 className="d-flex flex-column text-dark fw-bold my-1">
              <span className="text-white fs-1">{title}</span>
              <small className="text-gray-600 fs-6 fw-normal pt-2">
                {subTitle}
              </small>
            </h1>
          </div>
          <div className="d-flex align-items-center flex-wrap">
            <Search />

            {/* Notification Icon */}
            <div className="d-flex align-items-center py-3 py-lg-0">
              <div className="me-3">
                <a
                  href="#"
                  className="btn btn-icon btn-custom btn-active-color-primary position-relative"
                >
                  <span className="svg-icon svg-icon-1 svg-icon-white">
                    <Icon name={"bell"} className={"svg-icon-1x m-0"} />
                  </span>
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                </a>
                <NotificationDropdown />
              </div>
              <div className="me-3">
                <a
                  href="#"
                  className="btn btn-icon btn-custom btn-active-color-primary"
                >
                  <Icon name={"user"} className={"svg-icon-1x m-0"} />
                </a>
                <ProfileDropdown />
              </div>
              <div className="d-flex align-items-center me-3">
                <a
                  href="#"
                  className="btn btn-icon btn-custom btn-active-color-primary"
                >
                  <span className="svg-icon theme-light-show svg-icon-2">
                    <Icon name={"sun"} className={"svg-icon-1x m-0"} />
                  </span>
                  <span className="svg-icon theme-dark-show svg-icon-2">
                    <Icon name={"moon"} className={"svg-icon-1x m-0"} />
                  </span>
                </a>
                <DarkLightModeDropdown />
              </div>
              <a href="#" className="btn btn-primary">
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="header-offset" />
      </div>
    </>
  );
};

export default Header;
