import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterContext } from "./context/registerContext";

const OpenStoreModal = () => {
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false);

  const [storeInfo, setStoreInfo] = useState({
    name: "",
    email: "",
    why_loooty: "",
    store_cover_picture: "",
    portfolio_link: "",
  });
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStoreInfo(old => ({...old, email: user.email}))

    console.log(storeInfo);
   
    const signUpData = await dispatch(({ storeInfo }))
      .unwrap()
      .then(async (result) => {
        console.log(result);
        setIsLoading(false);
        toast.success("Sign in was successful");

        setShowRegModal({ ...showRegModal, login: false });
        navigate("/user");
      })
      .catch((err) => {
        setIsLoading(false);
        // console.log(signUpData, "UL")
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };



  const handleKey = (e) => {
    if (e.key === "esc") {
      setShowRegModal({ ...showRegModal, openStore: false });
    }
  };
  return (
    <div
      onKeyUp={(e) => {
        handleKey(e);
      }}
      className={`opn__open-store-modal-overlay ${
        fadeOut ? "lgn__fade-out-anim" : ""
      }`}
    >
      <div className="opn__open-store-modal">
        <div className="opn__close-btn-container">
          <div
            onClick={(e) => {
              setFadeOut((prev) => !prev);
              setTimeout(() => {
                setShowRegModal({ ...showRegModal, openStore: false });
                //  setFadeOut(false)
              }, 700);
              // setShowRegModal({...showRegModal, openStore: false})
            }}
            className="opn__close-btn"
          >
            <span className="opn__close-btn-text">X</span>
          </div>
        </div>
        <h2 className="opn__open-store-modal-title">Opening a Store</h2>
        <div className="opn__open-store-modal-info">
          <p>We can only accept the most qualified sellers at the moment</p>
          <p>Show us why you would be a great shop owner</p>
        </div>

        <div className="opn__open-store-form-group">
          <label className="opn__open-store-form-label">
            <span style={{ transform: "skewX(25deg)" }}>name</span>
          </label>
          <div className="opn__open-store-form-control-container">
            <input
              onChange={(e) =>
                setStoreInfo((old) => ({ ...old, name: e.target.value }))
              }
              value={storeInfo.value}
              className="opn__open-store-form-control"
            />
          </div>
        </div>

        <div className="opn__open-store-form-group">
          <label className="opn__open-store-form-label">
            <span style={{ transform: "skewX(25deg)" }}>Cover Picture</span>
          </label>
          <div className="opn__open-store-form-control-container">
            <input
              type={"file"}
              onChange={(e) =>
                setStoreInfo((old) => ({
                  ...old,
                  store_cover_picture: e.target.value,
                }))
              }
              value={storeInfo.value}
              className="opn__open-store-form-control"
            />
          </div>
        </div>

        <div className="opn__open-store-form-group">
          <label className="opn__open-store-form-label">
            <span style={{ transform: "skewX(25deg)" }}>
              Links to your portfolio
            </span>
          </label>
          <div className="opn__open-store-form-control-container">
            <input
              onChange={(e) =>
                setStoreInfo((old) => ({
                  ...old,
                  portfolio_link: e.target.value,
                }))
              }
              value={storeInfo.portfolio_link}
              className="opn__open-store-form-control"
            />
          </div>
        </div>

        <div className="opn__open-store-form-group">
          <label className="opn__open-store-form-label">
            <span style={{ transform: "skewX(25deg)" }}>
              why do you want to sell on loooty?
            </span>
          </label>
          <div className="opn__open-store-form-control-container">
            <input
              onChange={(e) =>
                setStoreInfo((old) => ({ ...old, why_loooty: e.target.value }))
              }
              value={storeInfo.why_loooty}
              className="opn__open-store-form-control"
            />
          </div>
        </div>

        <p className="opn__open-store-response-info">
          {" "}
          You should receive an answer within a few hours
        </p>

        <div className="opn__open-store-btn-group">
          <button onClick={handleSubmit} className="opn__open-store-btn">
            <span className="opn__open-store-btn-text">{isLoading?"Loading...":"SUBMIT"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenStoreModal;
