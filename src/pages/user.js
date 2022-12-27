import NavBar from "../component/navbar/navbar";
import { RiInstagramFill } from "react-icons/ri";
import { RiImageEditLine } from "react-icons/ri";

import { FaPlusCircle } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { RegisterContext } from "../component/auth/context/registerContext";
import { fetchMerchandiseStore } from "../api/auth";
import { setSelectedSubPage } from "../redux/reducers/userStateReducer";
import { toast } from "react-toastify";
import TagheaderCompDesktop from "../component/user/TagsheaderCompDesktop";
import TagheaderCompMobile from "../component/user/TagsHeaderCompMobile";
import PageSelectComp from "../component/user/PageSelectComp";

const CatmanImg = "/assets/image/catman.jpg";

// const Library = () => {
//     return (
//         <section className="user__library">
//             <div className="user__library-inner">
//                 <LibraryCard current={8} percent="80%"/>
//                 <LibraryCard current={10} percent="100%"/>
//                 <LibraryCard current={2} percent="0%"/>

//             </div>
//         </section>
//     )
// }


const User = () => {
  const [toggleVisAdmin, setToggleVisAdmin] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const user = useSelector((state) => state.user);
  const merchandiseStore = useSelector((state) => state.user.merchandiseStore);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const userSubPageSelected = useSelector((state) => state.userSubPageState);
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState("feature"); //Enum Types: feature, recent sellers, popular
  const activeInpageHeader = useSelector(
    (state) => state.userSubPageState.selected
  ); //Enum types: store, profile, library, messages, sales, settings
  const navigate = useNavigate();
  useEffect(() => {
    if (!toggleVisAdmin) {
      dispatch(setSelectedSubPage({ selected: "store" }));
      // setActiveInPageHeader("store")
    }

    dispatch(fetchMerchandiseStore({}))
      .unwrap()
      .then(async (result) => {
        // toast.success("fetch was successful");

        setShowRegModal({ ...showRegModal, login: false });
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });

    if (!user.user) {
      navigate("/");
      setShowRegModal({ ...showRegModal, login: true });
    }
  }, [toggleVisAdmin]);
  return (
    <section className="user__main-container">
      <header>
        <NavBar
          pageType={"user"}
          loggedIn={true}
          shortSearch={true}
          style={{ paddingBottom: "0", paddingTop: "0" }}
          search={true}
        />
        {/* <CGBarSlim style={{overflow: "scroll", position: "relative",}}/> */}
      </header>

      <main className="user__main">
        <section className="user__profile-preview-container">
          <button className="user__change-cover-btn">
            <div className="user__change-cover-btn-inner">
              <RiImageEditLine style={{ color: "white", fontSize: "1.4rem" }} />
              Change Cover
            </div>
          </button>

          {!toggleVisAdmin && (
            <button
              onClick={(e) => setToggleVisAdmin(true)}
              className="user__profile-switch-admin-btn"
            >
              Switch Admin Mode
            </button>
          )}


          <div className="user__profile-container">
            <img src={CatmanImg} className="user__profile-img" />
            <h3 className="user__profile-name">
              {merchandiseStore
                ? merchandiseStore.data[0].store_name
                : "Fetching store name..."}
            </h3>
            <div className="user__profile-suscribers">219.9k Subscribers</div>
          </div>

          <div className="user__profile-caution">
            {merchandiseStore
              ? merchandiseStore.data[0].why_loooty
              : "Fetching store name..."}
          </div>

          <div className="user__location-container">
            <RiInstagramFill /> Enugu, Nigeria.
          </div>
        </section>
        <section className="user__product-action-container">
          <button className="user__upload-products-btn">
            <div
              onClick={(e) => navigate("/user/upload")}
              className="user__upload-products-btn-inner"
            >
              UPLOAD&nbsp;PRODUCTS{" "}
              <FaPlusCircle style={{ fontSize: "1.3rem" }} />
            </div>
          </button>
          <button className="user__upload-products-btn">
            <div className="user__upload-products-btn-inner">
              DISCOUNTS{" "}
              <GiPriceTag
                style={{ fontSize: "1.3rem", transform: "scaleX(-1)" }}
              />
            </div>
          </button>

          <div className="user__admin-visitor-container">
            <button
              onClick={(e) => setToggleVisAdmin(true)}
              className={`user__AV-btn ${
                toggleVisAdmin && "user_AV-btn-active"
              }`}
            >
              <span className="user__AV-btn-inner">Admin</span>
            </button>
            <button
              onClick={(e) => setToggleVisAdmin(false)}
              className={`user__AV-btn ${
                !toggleVisAdmin && "user_AV-btn-active-dup"
              }`}
            >
              <span className="user__AV-btn-inner">Visitor</span>
            </button>
          </div>
        </section>

        {!isMobile ? (
          <TagheaderCompDesktop
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
          />
        ) : (
          <TagheaderCompMobile
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
          />
        )}

        {/* <TagsComp selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> */}

        <PageSelectComp inPageName={activeInpageHeader} />
      </main>
    </section>
  );
};

export default User;
