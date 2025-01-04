import Icon from "../../icons/Icon";
import { useForm } from "react-hook-form";
import { useState } from "react";
import depotlogo from "../../../assets/img/depotlogo.png";
import { loginThunk } from "../../../redux/auth/authActions";
import { useAppDispatch } from "../../../redux/hooks";
import { useSelector } from "react-redux";

type LoginFormData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

type AuthState = {
  user: null | LoginResponse;
  loading: boolean;
  error: null | string;
};

type RootState = {
  auth: AuthState;
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const { loading } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submitLoginForm = (data: LoginFormData) => {
    dispatch(loginThunk(data));
  };

  const handleEyeVisiblity = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className="d-flex flex-center flex-column flex-lg-row-fluid"
      onSubmit={handleSubmit(submitLoginForm)}
    >
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_in_form" action="#">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Log In</h1>
            <img alt="Logo" src={depotlogo} className="h-65px h-lg-85px" />
          </div>

          <div className="fv-row mb-8">
            <input
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="none"
              className="form-control bg-transparent"
              {...register("email", {
                required: "Email address is required",
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                //   message: "Invalid email address",
                // },
              })}
            />
            <div className="fv-plugins-message-container mt-2 text-danger">
              {errors.email?.message}
            </div>
          </div>

          <div className="fv-row mb-3">
            <div className="position-relative">
              <input
                type={isVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                autoComplete="none"
                className="form-control bg-transparent"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Password length must be greater than eight characters",
                  },
                })}
                value={password}
                onInput={handlePasswordChange}
              />
              {password.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "3%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                  }}
                  onClick={handleEyeVisiblity}
                >
                  <Icon
                    name={isVisible ? "eye" : "eyeOff"}
                    className="svg-icon m-0"
                  />
                </span>
              )}
            </div>
            <div className="fv-plugins-message-container mt-2 text-danger">
              {errors.password?.message}
            </div>
          </div>

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            <div />
            {/* <span className="link-primary">Forgot Password ?</span> */}
          </div>
          <div className="d-grid mb-10">
            <button
              type="submit"
              id="kt_sign_in_submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <span className="indicator-spinner">
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
              ) : (
                <span className="indicator-label" style={{ cursor: "pointer" }}>
                  Sign In
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
