import boomapp from "../../../assets/icons/boomapp.svg";

const Dropdown = () => {
  return (
    <>
      <div>
        <div className="data-kt-search-element main">
          <div className="d-flex flex-stack fw-semibold mb-4">
            <span className="text-muted fs-6 me-2">Recently Searched:</span>
            <div className="d-flex" />
          </div>
          <div className="scroll-y mh-200px mh-lg-325px">
            <div className="d-flex align-items-center mb-5">
              <div className="symbol symbol-40px me-4">
                <span className="symbol-label bg-light">
                  <span className="svg-icon svg-icon-2 svg-icon-primary">
                    <img src={boomapp} alt="" />
                  </span>
                </span>
              </div>
              <div className="d-flex flex-column">
                <a
                  href="#"
                  className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                >
                  BoomApp by Keenthemes
                </a>
                <span className="fs-7 text-muted fw-semibold">#45789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
