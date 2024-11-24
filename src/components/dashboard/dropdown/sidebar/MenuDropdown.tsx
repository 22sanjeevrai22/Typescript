const MenuDropdown = () => {
  return (
    <>
      <div
        className="menu-sub menu-sub-dropdown py-4 w-200px w-lg-225px"
        style={{}}
      >
        <div className="menu-item">
          <div className="menu-content">
            <span className="menu-section fs-5 fw-bolder ps-1 py-1">Home</span>
          </div>
        </div>
        <div className="menu-item">
          <a className="menu-link active" href="../../demo9/dist/index.html">
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
    </>
  );
};

export default MenuDropdown;
