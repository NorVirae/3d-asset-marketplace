import LoootyLogo, { LoootyLogoStatic } from "../loootyLogo";
import { FaEyeSlash, FaFacebookF } from "react-icons/fa";
import CheckButtons from "../buttons/checkButtons";
import { useContext, useState } from "react";
import { RegisterContext } from "./context/registerContext";
import { useNavigate } from "react-router-dom";
import { signUp, signUpAction } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import LoootyLoader from "../loader/loootyLoader";

const googleImg = "../../assets/image/auth/google.svg";

const SignUpModal = () => {
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const dispatch = useDispatch();
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState({
    pass: true,
    rePass: true,
  });
  const [clickProtect, setClickProtect] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    password_confirmation: false,
  });

  const [regInfo, setRegInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setClickProtect(true);

    const signUpData = await dispatch(signUpAction({ signUpData: regInfo }))
      .unwrap()
      .then(async (result) => {
        setIsLoading(false);
        toast.success("Sign up was successful");
        navigate("/")

        setShowRegModal({ ...showRegModal, register: false, login: true });
      })
      .catch((err) => {
        setIsLoading(false);
        setClickProtect(false);

        if (err.response) {
          toast.error(err.response.data.message);
          if (err.response.data.errors) {
            if (err.response.data.errors.name) {
              setErrors((old) => ({ ...old, name: true }));
              toast.error(err.response.data.errors.name[0]);
            }

            if (err.response.data.errors.email) {
              setErrors((old) => ({ ...old, email: true }));

              toast.error(err.response.data.errors.email[0]);
            }

            if (err.response.data.errors.password) {
              setErrors((old) => ({ ...old, password: true }));

              toast.error(err.response.data.errors.password[0]);
            }
            if (err.response.data.errors.password_confirmation) {
              setErrors((old) => ({ ...old, password_confirmation: true }));

              toast.error(err.response.data.errors.password_confirmation[0]);
            }
          }
        }
      });
  };

  return (
    <div
      className={`reg__sign-up-overlay ${fadeOut ? "lgn__fade-out-anim" : ""}`}
    >
      <section className="reg__sign-up-modal">
        <div className="reg__close-btn-container">
          <div
            onClick={() => {
              setFadeOut((prev) => !prev);
              setTimeout(() => {
                setShowRegModal({ ...showRegModal, register: false });
                //  setFadeOut(false)
              }, 600);
            }}
            className="reg__close-btn"
          >
            <span className="reg__close-btn-text">X</span>
          </div>
        </div>
        <div className="reg__loooty-innitials-container">
          <div className="reg_logo-container">
            <LoootyLogoStatic style={{ width: "15rem" }} />
          </div>
          <div className="reg__loooty-about">
            <div>Welcome to our little vault.</div>
            <div style={{ width: "75%" }}>Grab your loot!</div>
          </div>

          <ul className="reg__loooty-features">
            <li className="reg__loooty-features-item">
              Advance search and filtering options
            </li>
            <li className="reg__loooty-features-item">
              Add art work to custom selection
            </li>
            <li className="reg__loooty-features-item">
              Never miss a new artwork with tag
            </li>
            <li className="reg__loooty-features-item">
              Uploader and collection suscription
            </li>
          </ul>
        </div>

        <div className="reg__sign-up-forms-container">
          <form onSubmit={handleSignUp} className="reg__sign-up-form">
            <div className="reg__form-group-container">
              <div
                style={{
                  border: errors.name
                    ? ".2rem solid #df4759"
                    : ".2rem solid #2B2B38",
                }}
                className="reg__form-group"
              >
                <input
                  onChange={(e) =>
                    setRegInfo((old) => ({ ...old, name: e.target.value }))
                  }
                  onFocus={() => {
                    setErrors((old) => ({ ...old, name: false }));
                  }}
                  value={regInfo.name}
                  className="reg__form-control"
                  placeholder="Username"
                />
                <span
                  style={{ visibility: "hidden" }}
                  className="sign__hide-sensitive-info-button"
                >
                  <BsEyeFill className="lgn__hide-sensitive-ib-icon" />
                </span>
              </div>

              <div
                style={{
                  border: errors.email
                    ? ".2rem solid #df4759"
                    : ".2rem solid #2B2B38",
                }}
                className="reg__form-group"
              >
                <input
                  onChange={(e) =>
                    setRegInfo((old) => ({ ...old, email: e.target.value }))
                  }
                  onFocus={() => {
                    setErrors((old) => ({ ...old, email: false }));
                  }}
                  value={regInfo.email}
                  className="reg__form-control"
                  type={"email"}
                  placeholder=" Email"
                />
                <span
                  style={{ visibility: "hidden" }}
                  className="sign__hide-sensitive-info-button"
                >
                  <BsEyeFill className="lgn__hide-sensitive-ib-icon" />
                </span>
              </div>

              <div
                style={{
                  border: errors.password
                    ? ".2rem solid #df4759"
                    : ".2rem solid #2B2B38",
                }}
                className="reg__form-group"
              >
                <input
                  onChange={(e) =>
                    setRegInfo((old) => ({ ...old, password: e.target.value }))
                  }
                  onFocus={() => {
                    setErrors((old) => ({ ...old, password: false }));
                  }}
                  value={regInfo.password}
                  type={hidePassword.pass ? "password" : "text"}
                  className="reg__form-control"
                  placeholder="Password"
                />
                <span
                  onClick={() =>
                    setHidePassword((old) => ({
                      ...old,
                      pass: !hidePassword.pass,
                    }))
                  }
                  className="sign__hide-sensitive-info-button"
                >
                  {hidePassword.pass ? (
                    <BsEyeFill className="lgn__hide-sensitive-ib-icon" />
                  ) : (
                    <FaEyeSlash className="lgn__hide-sensitive-ib-icon" />
                  )}
                </span>
              </div>

              <div
                style={{
                  border: errors.password_confirmation
                    ? ".2rem solid #df4759"
                    : ".2rem solid #2B2B38",
                }}
                className="reg__form-group"
              >
                <input
                  onChange={(e) =>
                    setRegInfo((old) => ({
                      ...old,
                      password_confirmation: e.target.value,
                    }))
                  }
                  onFocus={() => {
                    setErrors((old) => ({
                      ...old,
                      password_confirmation: false,
                    }));
                  }}
                  value={regInfo.password_confirmation}
                  className="reg__form-control"
                  type={hidePassword.rePass ? "password" : "text"}
                  placeholder="Re-Enter Password"
                />
                <span
                  onClick={() =>
                    setHidePassword((old) => ({
                      ...old,
                      rePass: !hidePassword.rePass,
                    }))
                  }
                  className="sign__hide-sensitive-info-button"
                >
                  {hidePassword.rePass ? (
                    <BsEyeFill className="lgn__hide-sensitive-ib-icon" />
                  ) : (
                    <FaEyeSlash className="lgn__hide-sensitive-ib-icon" />
                  )}
                </span>
              </div>
            </div>

            <div className="reg__terms-container">
              <CheckButtons active={active} setActive={setActive} />
              You agree to the{" "}
              <span style={{ color: "#FF9700" }}>Terms of Use</span> &amp;{" "}
              <span style={{ color: "#FF9700" }}>Privacy policy</span>
            </div>

            <div className="reg__form-btn-group">
              <button
                disabled={clickProtect}
                style={{ opacity: clickProtect ? "0.6" : "1" }}
                onClick={handleSignUp}
                className="reg__login-btn"
              >
                <span className="reg__login-btn-text">
                  {" "}
                  {!isLoading ? <>SIGN UP</> : <LoootyLoader />}
                </span>
              </button>
            </div>

            <div className="reg__login-alternatives-container">
              <button className="reg__btn-google">
                <img
                  style={{ width: "25px", transform: "skewX(25deg)" }}
                  src={googleImg}
                  alt=""
                />
                <span className="reg__btn-google-text">
                  Sign&nbsp;in&nbsp;with&nbsp;Google
                </span>
              </button>
              <button className="reg__btn-facebook">
                <FaFacebookF
                  style={{ fontSize: "1.3rem", transform: "skewX(25deg)" }}
                />
                <span className="reg__btn-facebook-text">
                  Sign&nbsp;in&nbsp;with&nbsp;Facebook
                </span>
              </button>
              <div className="reg__form-recovery-container">
                <p>
                  {" "}
                  Don't have an account?{" "}
                  <span
                    onClick={(e) =>
                      setShowRegModal({
                        ...showRegModal,
                        register: false,
                        login: true,
                      })
                    }
                    style={{ color: "#FF9700", cursor: "pointer" }}
                  >
                    Sign in!{" "}
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUpModal;
