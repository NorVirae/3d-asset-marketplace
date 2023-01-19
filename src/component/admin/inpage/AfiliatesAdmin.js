

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "../../../data/data.json";
import { setSelectedSubPage } from "../../../redux/reducers/userStateReducer";
import AdminFreebiesSidebar from "../AdminFreebiesSidebar";
import ListedUser from "../features/ListedUser";
import TagsComp from "../TagsComp";

const AffiliateAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  const [isStoreOwner, setIsStoreOwner] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sidebarMaininfo = [
    {
      leftInfo: "Name",
      rightInfo: "Steven James",
      showEditableSign: true,
    },

    {
      leftInfo: "Status",
      rightInfo: "Verified",
      showVerifySign: true,
      showEditableSign: true,
    },

    {
      leftInfo: "Products",
      rightInfo: "50 uploads",
    },

    {
      leftInfo: "Sales",
      rightInfo: "25,100.00",
    },

    {
      leftInfo: "Balance",
      rightInfo: "1,500.00",
    },
  ];
  return (
    <div className="admin__users-container">
      <AdminFreebiesSidebar
        // isStoreOwner={isStoreOwner}
        type="user"
        setActiveSideTab={setActiveSideTab}
        activeSideTab={activeSideTab}
        sidebarMaininfoIts={sidebarMaininfo}
        sideActionOnclick={() => {
          navigate("/admin/expanded");
          dispatch(setSelectedSubPage({ selected: "affiliates" }));
        }}
      />
      <section className="admin__users-list-container">
        <TagsComp />
        <section className="admin__users-list-body">
          {data
            ? data.usersList.map((user, index) => {
                return (
                  <ListedUser
                  isAffiliated={true}
                    isRequested={user.isRequested}
                    showVerifySign={user.isVerified}
                    styleVerifySign={{
                      position: "absolute",
                      top: "25%",
                      left: "5%",
                    }}
                    id={index}
                    key={index}
                    selected={index == selected}
                    setSelected={setSelected}
                    image={user.image}
                    name={user.name}
                    location={user.location}
                    emails={user.emails}
                    phone={user.phone}
                  />
                );
              })
            : null}
        </section>
      </section>
    </div>
  );
};

export default AffiliateAdmin;
