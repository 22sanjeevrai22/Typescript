import Dropdown from "../dashboard/dropdown/header/SearchDropdown";
import searchsvg from "../../assets/icons/search.svg";

const Search = () => {
  return (
    <>
      <div className="header-search py-3 py-lg-0 me-3">
        <div
          id="kt_header_search"
          className="header-search d-flex align-items-center w-lg-250px"
        >
          <form className="w-100 position-relative">
            <input type="hidden" />
            <span className="svg-icon svg-icon-2 search-icon position-absolute top-50 translate-middle-y ms-4">
              <img src={searchsvg} alt="search" />
            </span>
            <input
              type="text"
              className="form-control custom-form-control ps-13"
              name="search"
              placeholder="Find Goods"
            />
            <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5">
              <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
            </span>
            <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4">
              X
            </span>
          </form>
          <div className="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
