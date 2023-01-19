import "./auth.css";
import { FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signInAction } from "../../api/auth";
import { RegisterContext } from "./context/registerContext";
import LoootyLoader from "../loader/loootyLoader";

const googleImg = "/assets/image/auth/google.svg";

const LoginModal = ({ onClick }) => {
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  const navigate = useNavigate();
  const [hidePassword, setHidePassword] = useState(true);

  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const signUpData = await dispatch(signInAction({ signInData: loginInfo }))
      .unwrap()
      .then(async (result) => {
        setIsLoading(false);
        toast.success("Sign in was successful");

        setShowRegModal({ ...showRegModal, login: false });
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="lgn__login-modal">
      <div className="lgn__arrow"></div>
      <form
      autoComplete="off"
        onSubmit={handleSignIn}
        onClick={(e) => e.stopPropagation()}
        className="lgn__login-form"
      >
        <div className="lgn__form-group">
          <input
          autocomplete="off"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo((old) => ({ ...old, email: e.target.value }))
            }
            className="lgn__form-control"
            placeholder="Email"
          />
        </div>

        <div className="lgn__form-group">
          <input
          autocomplete="off"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo((old) => ({ ...old, password: e.target.value }))
            }
            type={hidePassword ? "password" : "text"}
            className="lgn__form-control"
            placeholder="Password"
          />
          <span
            onClick={() => setHidePassword(!hidePassword)}
            className="lgn__hide-sensitive-info-button"
          >
            {hidePassword ? (
              <BsEyeFill className="lgn__hide-sensitive-ib-icon" />
            ) : (
              <FaEyeSlash className="lgn__hide-sensitive-ib-icon" />
            )}
          </span>
        </div>

        <div className="lgn__form-recovery-container">
          <p>
            {" "}
            Forgot your{" "}
            <span style={{ color: "#FF9700" }}>Password / Username?</span>
          </p>
        </div>

        <div className="lgn__form-btn-group">
          <button onClick={(e) => handleSignIn(e)} className="lgn__login-btn">
            <span className="lgn__login-btn-text">
              {isLoading ? <LoootyLoader /> : "SIGN IN"}
            </span>
          </button>
        </div>

        <div className="lgn__login-alternatives-container">
          <button className="lgn__btn-google">
            <img
              style={{ width: "25px", transform: "skewX(15deg)" }}
              src={googleImg}
              alt=""
            />
            <span className="lgn__btn-google-text">Sign in with Google</span>
          </button>
          <button className="lgn__btn-facebook">
            <FaFacebookF
              style={{ fontSize: "1.3rem", transform: "skewX(15deg)" }}
            />
            <span className="lgn__btn-facebook-text">
              Sign in with Facebook
            </span>
          </button>
          <div className="lgn__form-recovery-container">
            <p>
              {" "}
              Don't have an account?{" "}
              <span style={{ color: "#FF9700" }}>Sign up! </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
