import NavBar from "../component/navbar/navbar";
import { RiInstagramFill } from "react-icons/ri";
import { RiImageEditLine } from "react-icons/ri";

import { FaPlusCircle } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { RegisterContext } from "../component/auth/context/registerContext";
import { fetchMerchandiseStore } from "../api/auth";
import { setSelectedSubPage } from "../redux/reducers/userStateReducer";
import { toast } from "react-toastify";
import TagheaderCompDesktop from "../component/user/TagsheaderCompDesktop";
import TagheaderCompMobile from "../component/user/TagsHeaderCompMobile";
import PageSelectComp from "../component/user/PageSelectComp";
import UniversalTagHeaderDesktop from "../component/user/UniversalTagHeaderDesktop";

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

export const ChangeCoverBtn = ({ style }) => {
  return (
    <button style={style} className="user__change-cover-btn">
      <div className="user__change-cover-btn-inner">
        <RiImageEditLine style={{ color: "white", fontSize: "1.4rem" }} />
        Change Cover
      </div>
    </button>
  );
};

export const ProfileUser = ({ merchandiseStore, user, hasStore, style }) => {
  return (
    <div className="user__profile-container">
      <img src={CatmanImg} className="user__profile-img" />
      <h3 className="user__profile-name">
        {merchandiseStore
          ? merchandiseStore.store_name
          : user.user
          ? user.user.name
          : null}
      </h3>
      {hasStore && (
        <div className="user__profile-suscribers">219.9k Subscribers</div>
      )}
    </div>
  );
};

export const ProfileUserAdmin = ({
  merchandiseStore,
  user,
  hasStore,
  style,
}) => {
  return (
    <div style={style} className="user__profile-container admin">
      <img src={CatmanImg} className="user__profile-img admin" />
      <div className="user__profile-container-admin">
        <h3 className="user__profile-name">
          {/* {merchandiseStore
            ? merchandiseStore.store_name
            : user.user
            ? user.user.name
            : null} */}
            Jasmine
        </h3>
        {hasStore && (
          <div className="user__profile-suscribers">219.9k Subscribers</div>
        )}
      </div>
    </div>
  );
};

const User = () => {
  const [toggleVisAdmin, setToggleVisAdmin] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const user = useSelector((state) => state.user);
  const merchandiseStore = useSelector((state) => state.user.merchandiseStore);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const [hasStore, setHasStore] = useState(false);
  const userSubPageSelected = useSelector((state) => state.userSubPageState);
  const dispatch = useDispatch();
  const params = useParams()
  const hasStoreTags = [
    {
      name: "store",
      dropDownList: ["suscribers", "store"],
    },
    {
      name: "profile",
    },
    {
      name: "library",
    },
    {
      name: "messages",
    },
    {
      name: "sales",
      dropDownList: ["sales", "balance"],
    },
    {
      name: "settings",
      dropDownList: ["affiliates", "settings"],
    },
  ];

  const [selectedTag, setSelectedTag] = useState("feature"); //Enum Types: feature, recent sellers, popular
  const activeInpageHeaderRedux = useSelector(
    (state) => state.userSubPageState.selected
  ); //Enum types: store, profile, library, messages, sales, settings
  const [activeInpageHeader, setActiveInPageHeader] = useState(params.subpage? params.subpage: "store")
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(params, params.subpage, "PARAMS")
    // if (!toggleVisAdmin) {
    //   dispatch(setSelectedSubPage({ selected: params.subpage?params.subpage:"store" }));
    //   // setActiveInPageHeader("store")
    // }
    setActiveInPageHeader(params.subpage)

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

    // if (!user.user) {
    //   navigate("/");
    //   setShowRegModal({ ...showRegModal, login: true });
    // }
  }, [toggleVisAdmin, user.user, params]);
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
        <section
          style={{
            backgroundImage: `url(${
              merchandiseStore
                ? "/assets/image/homepage.jpg"
                : "/assets/image/background/empty-store.png"
            })`,
            backgroundSize: `${merchandiseStore ? "cover" : "contain"}`,
          }}
          className="user__profile-preview-container"
        >
          {merchandiseStore && <ChangeCoverBtn />}

          {toggleVisAdmin && merchandiseStore && (
            <button
              onClick={(e) => setToggleVisAdmin(true)}
              className="user__profile-switch-admin-btn"
            >
              Switch Admin Mode
            </button>
          )}

          <ProfileUser
            merchandiseStore={merchandiseStore}
            user={user}
            hasStore={hasStore}
          />

          <div className="user__profile-caution">
            {merchandiseStore
              ? merchandiseStore.why_loooty
              : user.user
              ? user.user.email
              : null}
          </div>

          <div className="user__location-container">
            <RiInstagramFill /> Enugu, Nigeria.
          </div>
        </section>
        <section className="user__product-action-container">
          {merchandiseStore && (
            <button
              onClick={(e) => navigate("/user/upload")}
              className="user__upload-products-btn"
            >
              <div className="user__upload-products-btn-inner">
                UPLOAD&nbsp;PRODUCTS{" "}
                <FaPlusCircle style={{ fontSize: "1.3rem" }} />
              </div>
            </button>
          )}

          {!merchandiseStore && (
            <button
              onClick={(e) => navigate("/open/store")}
              className="user__upload-products-btn"
            >
              <div className="user__upload-products-btn-inner">
                OPEN&nbsp;A&nbsp;STORE{" "}
                {/* <FaPlusCircle style={{ fontSize: "1.3rem" }} /> */}
              </div>
            </button>
          )}

          {merchandiseStore && (
            <button className="user__upload-products-btn">
              <div className="user__upload-products-btn-inner">
                DISCOUNTS{" "}
                <GiPriceTag
                  style={{ fontSize: "1.3rem", transform: "scaleX(-1)" }}
                />
              </div>
            </button>
          )}

          {merchandiseStore && toggleVisAdmin && (
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
          )}
        </section>

        {!isMobile ? (
          merchandiseStore ? (
            <UniversalTagHeaderDesktop
              toggleVisAdmin={toggleVisAdmin}
              activeInpageHeader={activeInpageHeader}
              TagList={hasStoreTags}
            />
          ) : (
            // <TagheaderCompDesktop
            //   toggleVisAdmin={toggleVisAdmin}
            //   activeInpageHeader={activeInpageHeader}
            // />
            <UniversalTagHeaderDesktop
              toggleVisAdmin={toggleVisAdmin}
              activeInpageHeader={activeInpageHeader}
            />
          )
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
