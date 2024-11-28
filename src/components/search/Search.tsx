import { useEffect, useRef, useState } from "react";
import Dropdown from "../dashboard/dropdown/header/SearchDropdown";
import Icon from "../icons/Icon";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropDownRef} className="header-search py-3 py-lg-0 me-3">
        <div
          id="kt_header_search"
          className="header-search d-flex align-items-center w-lg-250px"
        >
          <div className="w-100 position-relative">
            <form className="w-full">
              <input type="hidden" />
              <span className="svg-icon svg-icon-2 search-icon position-absolute top-50 translate-middle-y ms-4">
                <Icon name={"search"} className={"svg-icon-1x m-0"} />
              </span>
              <input
                type="text"
                className="form-control custom-form-control ps-13"
                name="search"
                placeholder="Find Goods"
                onClick={() => setIsOpen(!isOpen)}
                autoComplete="off"
              />
              <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5">
                <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
              </span>
              <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4">
                <Icon
                  name={"close"}
                  className={"svg-icon-2 svg-icon-lg-1 me-0"}
                />
              </span>
            </form>

            {isOpen && (
              <div>
                <Dropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
