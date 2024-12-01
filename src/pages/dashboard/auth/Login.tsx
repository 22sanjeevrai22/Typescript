import { Link } from "react-router-dom";
import building from "../../../assets/img/building.jpg";
import depotlogo from "../../../assets/img/depotlogo.png";
import LoginForm from "../../../components/dashboard/auth/LoginForm";
import { HOME_ROUTE } from "../../../constants/routes";
const Login = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <LoginForm />
          </div>
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${building})`,
              backgroundSize: "cover", // Make sure the image covers the container
              backgroundPosition: "center", // Center the image
              height: "100svh", // Adjust height as needed
              width: "100%",
            }}
          >
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              <Link to={HOME_ROUTE} className="mb-0 mb-lg-12">
                <img alt="Logo" src={depotlogo} className="h-80px h-lg-100px" />
              </Link>
              <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-3">
                Depot Higher Secondary School
              </h1>
              <h3 className="d-none d-lg-block text-white fs-2qx fw-medium text-center mb-6">
                Ghopa Camp, Dharan-18
              </h3>
              <div className="d-none d-lg-block text-white fs-base text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti labore nisi omnis itaque nobis cum est ea, tenetur
                repellat temporibus sequi?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
