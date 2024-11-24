import Footer from "../../components/dashboard/Footer";
import Header from "../../components/dashboard/Header";

const Home = () => {
  return (
    <div className="d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <Header title="Students" subTitle="Student List" />
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
                    We are working <br />
                    to boost lovely mood
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
            <div className="col-xl-4">
              <div className="row mb-5 mb-xl-8 g-5 g-xl-8">
                <div className="col-6">
                  <div className="card card-stretch">
                    card
                    <a
                      href="../../demo9/dist/account/overview.html"
                      className="btn btn-flex btn-text-gray-800 btn-icon-gray-400 btn-active-color-primary bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10"
                    >
                      <span className="svg-icon svg-icon-3x mb-5">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                            fill="currentColor"
                          />
                          <path
                            d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="fs-4 fw-bold">User Profile</span>
                    </a>
                  </div>
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
