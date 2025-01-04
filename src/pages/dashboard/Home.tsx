import { Link } from "react-router-dom";
import Footer from "../../components/dashboard/Footer";
import Header from "../../components/dashboard/Header";
import Icon from "../../components/icons/Icon";
import { dashboardMenu } from "../../types/sidebarMenu";

const Home = () => {
  return (
    <div className="d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <Header
        title="Infinity Dashboard"
        subTitle="Welcome to Infinity Dashboard"
      />
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="container-xxl" id="kt_content_container">
          <div className="row g-5 g-xl-8">
            <div className="col-xl-4 ps-xl-12">
              <div
                className="card bgi-position-y-bottom bgi-position-x-end bgi-no-repeat bgi-size-cover min-h-250px bg-primary mb-5 mb-xl-8"
                style={{
                  backgroundColor: "",
                  backgroundPosition: "100% 50px",
                  backgroundSize: "500px auto",
                  backgroundImage: 'url("assets/media/misc/city.png")',
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center ps-lg-12">
                  <h3 className="text-white fs-2qx fw-bold mb-7">
                    Depot Higher <br />
                    Secondary English Boarding School
                  </h3>
                  <div className="m-0">
                    <a
                      href="#"
                      className="btn btn-success fw-semibold px-6 py-3"
                    >
                      Create a Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row mb-5 mb-xl-8 g-5 g-xl-8">
                <div
                  className="col-12"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // Three equal columns
                    gap: "20px", // Optional: Adds spacing between items
                  }}
                >
                  {dashboardMenu.map((menu, index) => (
                    <div className="card card-stretch" key={index}>
                      <Link
                        to={menu.route}
                        className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-center align-items-center text-start w-100 p-10"
                      >
                        <span className="svg-icon mb-8">
                          <Icon
                            name={menu.name}
                            className={"svg-icon-3x m-0"}
                          />
                        </span>
                        <span className="fs-4 fw-bold mb-4">{menu.label}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
