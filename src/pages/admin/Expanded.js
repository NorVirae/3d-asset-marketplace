import { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";
import NavBar from "../../component/navbar/navbar";

import { RegisterContext } from "../../component/auth/context/registerContext";
import TagheaderCompMobile from "../../component/admin/TagheaderCompMobile";
import UniversalTagHeaderDesktop, {
  UniversalTagHeaderDesktopAdmin,
} from "../../component/user/UniversalTagHeaderDesktop";
import { ChangeCoverBtn, ProfileUserAdmin } from "../user";
import PageSelectComp from "../../component/user/PageSelectComp";
import { RiImageEditLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import UserPurpleInnerStripeBtn from "../../component/buttons/UserPurpleButton";
import FireMailButton from "../../component/admin/features/FireMailButton";

const adminTags = [
  {
    name: "home",
    // dropDownList: ["suscribers"],
  },
  {
    name: "users",
  },
  {
    name: "stores",
  },
  {
    name: "affiliates",
  },
  {
    name: "payouts",
  },
  {
    name: "products",
    // dropDownList: ["affiliates"],
  },

  {
    name: "tags&categories",
    // dropDownList: ["affiliates"],
  },

  {
    name: "carts&wishlist",
    // dropDownList: ["affiliates"],
  },
];

const userTags = [
  {
    name: "store",
    // dropDownList: ["suscribers"],
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
  },
  {
    name: "settings",
    // dropDownList: ["affiliates"],
  },
];

const MinimisedBanner = () => {
  const user = useSelector((state) => state.user);
  const merchandiseStore = useSelector((state) => state.merchandiseStore);
  return (
    <section className="admin__banner-container">
      <div className="admin__banner-container-inner">
        <div className="admin__profile-banner-container">
          <ChangeCoverBtn
            style={{ position: "relative", top: "0", right: "0" }}
          />
          <ProfileUserAdmin
            merchandiseStore={merchandiseStore}
            user={user}
            hasStore={true}
          />
        </div>

        <div className="admin__profile-location-container">
          <MdLocationOn />
          <span>Enugu, Nigeria</span>
        </div>

        <div className="admin__fire-button-container">
          <FireMailButton />
          <UserPurpleInnerStripeBtn
            actionButtonOnclick={() => {}}
            style={{ width: "10rem", padding: "1rem 3rem" }}
            text={
              <>
                <span>BLOCK</span>
                <span>USER</span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

const Expanded = () => {
  const [toggleVisAdmin, setToggleVisAdmin] = useState(true);
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const user = useSelector((state) => state.user);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const userSubPageSelected = useSelector((state) => state.userSubPageState);
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState("features"); //Enum Types: feature, recent sellers, popular
  const activeInpageHeaderAdmin = useSelector(
    (state) => state.userSubPageState.selectedAdmin
  ); //Enum types: store, profile, library, messages, sales, settings
  const activeInpageHeaderUser = useSelector(
    (state) => state.userSubPageState.selected
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!toggleVisAdmin) {
      dispatch(setSelectedSubPage({ selected: "store" }));
      // setActiveInPageHeader("store")
    }

    // if (!user || !user.user){
    //     navigate("/")
    //     setShowRegModal({...showRegModal, login:true})

    // }
  }, [toggleVisAdmin]);
  return (
    <section className="admin__main-container">
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

      <main className="admin__main">
        <div className="admin__separator"></div>
        {/*  */}

        {!isMobile ? (
          <div className="admin__tags-compose-container">
            <UniversalTagHeaderDesktopAdmin
              style={{ zoom: ".8", marginBottom: "3rem"}}
              toggleVisAdmin={toggleVisAdmin}
              activeInpageHeader={activeInpageHeaderAdmin}
              TagList={adminTags}
              onClick={() => navigate("/admin/product")}
            />
            <UniversalTagHeaderDesktop
              style={{ zoom: ".8", marginBottom: "2rem" }}
              toggleVisAdmin={toggleVisAdmin}
              activeInpageHeader={activeInpageHeaderUser}
              TagList={userTags}
            />
            <MinimisedBanner />
          </div>
        ) : (
          <TagheaderCompMobile
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeaderAdmin}
          />
        )}

        <PageSelectComp inPageName={activeInpageHeaderUser} />

        {/* <TagsComp selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> */}
      </main>
    </section>
  );
};

export default Expanded;
