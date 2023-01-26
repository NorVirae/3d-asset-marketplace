import { useContext, useEffect, useState } from "react";


import { useMediaQuery } from "react-responsive";
import { setSelectedSubPage } from "../redux/reducers/userStateReducer";
import NavBar from "../component/navbar/navbar";

import { RegisterContext } from "../component/auth/context/registerContext";
import PageSelectComp from "../component/admin/PageSelectComp";
import TagheaderCompMobile from "../component/admin/TagheaderCompMobile";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UniversalTagHeaderDesktopAdmin } from "../component/user/UniversalTagHeaderDesktop";
import Footer from "../component/footer/footer";
import PageSelectCompNotifier from "../component/admin/PageSelectCompNotifier";

const hasStoreTags = [
  {
    name: "all (3)",
    // dropDownList: ["suscribers"],
  },
  {
    name: "ratings (3)",
  },
  {
    name: "comments (3)",
  },
  {
    name: "sales (3)",
  },
  {
    name: "forum (0)",
  },
  {
    name: "updates (1)",
    // dropDownList: ["affiliates"],
  },

 
];

const NotificationPage = () => {
  const [toggleVisAdmin, setToggleVisAdmin] = useState(true);
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const user = useSelector((state) => state.user);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const userSubPageSelected = useSelector((state) => state.userSubPageState);
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState("features"); //Enum Types: feature, recent sellers, popular
  const activeInpageHeader = useSelector(
    (state) => state.userSubPageState.selectedAdmin
  ); //Enum types: store, profile, library, messages, sales, settings
  const navigate = useNavigate();
  useEffect(() => {
    if (!toggleVisAdmin) {
      dispatch(setSelectedSubPage({ selected: "all (3)" }));
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
          <UniversalTagHeaderDesktopAdmin
            style={{ zoom: ".8" }}
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
            TagList={hasStoreTags}
          />
        ) : (
          <TagheaderCompMobile
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
          />
        )}

        {/* <TagsComp selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> */}

        <PageSelectCompNotifier inPageName={activeInpageHeader} />
      </main>
      <Footer/>
    </section>
  );
};

export default NotificationPage;
