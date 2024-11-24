const SettingDropdown = () => {
  return (
    <>
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
    </>
  );
};

export default SettingDropdown;
