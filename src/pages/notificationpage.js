import { useState } from "react";

import AdminFreebiesSidebar from "../AdminFreebiesSidebar";

import TagsComp from "../TagsComp";
import data from "../../../data/data.json";
import ListedUser from "../features/ListedUser";
import { useNavigate } from "react-router-dom";
import { setSelectedSubPage } from "../../../redux/reducers/userStateReducer";
import { useDispatch } from "react-redux";
import { UniversalTagHeaderDesktopAdmin } from "../component/user/UniversalTagHeaderDesktop";
import TagheaderCompMobile from "../component/user/TagsHeaderCompMobile";
import PageSelectComp from "../component/user/PageSelectComp";

const NotificationPage = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch()
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

      <PageSelectComp inPageName={activeInpageHeader} />
    </main>
  </section>
  );
};

export default NotificationPage;
