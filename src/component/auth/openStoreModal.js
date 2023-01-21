import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createMerchandiseStore } from "../../api/auth";
import LoootyLoader from "../loader/loootyLoader";
import { RegisterContext } from "./context/registerContext";

const OpenStoreModal = () => {
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [errors, setErrors] = useState({
    store_name: false,
    store_email: false,
    base64_photo: false,
    why_loooty: false,
    portfolio_link: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [clickProtect, setClickProtect] = useState(false);

  const [storeInfo, setStoreInfo] = useState({
    store_name: "",
    store_email: user ? user.email : "huz@gmail.com",
    base64_photo: [],
    why_loooty: "",
    portfolio_link: "",
  });
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  useEffect(() => {
    if (!user) {
      navigate("/");
      setShowRegModal({ ...showRegModal, login: true, openStore: false });
    }
  }, [user]);

  const convertToBase64 = (blob) => {
    // var blob = new Blob([blob])
    // console.log(blob, "BLUBALAL")
    // var reader = new FileReader();
    // reader.readAsDataURL(blob);
    // reader.onloadend = function () {
    //   var base64data = reader.result;
    //   return base64data;
    // };

    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // console.log(reader.result, "HUZ")
        setStoreInfo((old) => ({
          ...old,
          base64_photo: [reader.result.split(",")[1]],
        }));
        return resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setClickProtect(true);
    // setStoreInfo(old => ({...old, email: user.email}))
    let data = new FormData();

    // data.append("store_name", storeInfo.store_name);
    // data.append("store_email", storeInfo.store_email);
    // data.append('store_cover_picture', storeInfo.store_cover_picture)
    // data.append("why_loooty", storeInfo.why_loooty);
    // data.append("portfolio_link", storeInfo.portfolio_link);
    // console.log(storeInfo, "HONE");
    const signUpData = await dispatch(
      createMerchandiseStore({ storeInfo: storeInfo })
    )
      .unwrap()
      .then(async (result) => {
        setIsLoading(false);
        toast.success("Store Creation was successful");

        setShowRegModal({ ...showRegModal, login: false });
        navigate("/user");
      })
      .catch((err) => {
        setIsLoading(false);
        setClickProtect(false);

        if (err.response) {
          toast.error(err.response.data.message);
          if (err.response.data.errors) {
            if (err.response.data.errors.store_name) {
              setErrors((old) => ({ ...old, store_name: true }));
              toast.error(err.response.data.errors.store_name[0]);
            }

            if (err.response.data.errors.store_email) {
              setErrors((old) => ({ ...old, store_email: true }));
              toast.error(err.response.data.errors.store_email[0]);
            }

            if (err.response.data.errors.base64_photo) {
              setErrors((old) => ({ ...old, base64_photo: true }));
              toast.error(err.response.data.errors.base64_photo[0]);
            }

            if (err.response.data.errors.why_loooty) {
              setErrors((old) => ({ ...old, why_loooty: true }));
              toast.error(err.response.data.errors.why_loooty[0]);
            }

            if (err.response.data.errors.portfolio_link) {
              setErrors((old) => ({ ...old, portfolio_link: true }));
              toast.error(err.response.data.errors.portfolio_link[0]);
            }
          }
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
          <div
            style={{
              border: errors.store_name
                ? ".2rem solid #df4759"
                : " .2rem solid #2B2B38",
            }}
            className="opn__open-store-form-control-container"
          >
            <input
              placeholder="Loooty Collosal, Aristocrati etc.."
              onChange={(e) =>
                setStoreInfo((old) => ({ ...old, store_name: e.target.value }))
              }
              onFocus={() => {
                setErrors((old) => ({ ...old, store_name: false }));
              }}
              value={storeInfo.store_name}
              className="opn__open-store-form-control"
            />
          </div>
        </div>

        <div className="opn__open-store-form-group">
          <label className="opn__open-store-form-label">
            <span style={{ transform: "skewX(25deg)" }}>Cover Picture</span>
          </label>
          <div
            style={{
              border: errors.base64_photo
                ? ".2rem solid #df4759"
                : " .2rem solid #2B2B38",
            }}
            className="opn__open-store-form-control-container"
          >
            <input
              type={"file"}
              multiple

              onFocus={() => {
                setErrors((old) => ({ ...old, base64_photo: false }));
              }}
              onChange={(e) => {
                setErrors((old) => ({ ...old, base64_photo: false }));
                setStoreInfo((old) => ({
                  ...old,
                  base64_photo: [convertToBase64(e.target.files[0])],
                }));
              }}
              // value={storeInfo.value}
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
          <div
            style={{
              border: errors.portfolio_link
                ? ".2rem solid #df4759"
                : " .2rem solid #2B2B38",
            }}
            className="opn__open-store-form-control-container"
          >
            <input
            placeholder="http://myportfolio.com"

              onFocus={() => {
                setErrors((old) => ({ ...old, portfolio_link: false }));
              }}
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
          <div
            style={{
              border: errors.why_loooty
                ? ".2rem solid #df4759"
                : " .2rem solid #2B2B38",
            }}
            className="opn__open-store-form-control-container"
          >
            <input
            placeholder="I want my work to reach the wider african audience"

              onFocus={() => {
                setErrors((old) => ({ ...old, why_loooty: false }));
              }}
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
          <button
            disabled={clickProtect}
            style={{ opacity: clickProtect ? "0.6" : "1" }}
            onClick={handleSubmit}
            className="opn__open-store-btn"
          >
            <span className="opn__open-store-btn-text">
              {isLoading ? <LoootyLoader /> : "SUBMIT"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenStoreModal;
