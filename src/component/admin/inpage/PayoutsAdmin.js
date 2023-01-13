
import data from "../../../data/data.json";
import { useState } from "react";
import AdminFreebiesSidebar from "../AdminFreebiesSidebar";
import TagsComp from "../TagsComp";
import ListedUserPayout from "../features/ListedUserPayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedSubPage } from "../../../redux/reducers/userStateReducer";

const sidebarMaininfo = [
  {
    leftInfo: "Method",
    rightInfo: "Fiat",
  },

  {
    leftInfo: "Merchant",
    rightInfo: "Payoneer",
   
  },

  {
    leftInfo: "Email",
    rightInfo: "stevenjames@gmail.com",
  },

  {
    leftInfo: "Ready For Payout",
    rightInfo: "$ 2,500.00",
  },

  {
    leftInfo: "Processing Orders",
    rightInfo: "$15",
  },
];

const PayoutsAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  const [isStoreOwner, setIsStoreOwner] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="admin__users-container">
      <AdminFreebiesSidebar
        isPayoutsPage={true}
        isStoreOwner={isStoreOwner}
        type="user"
        setActiveSideTab={setActiveSideTab}
        activeSideTab={activeSideTab}
        sidebarMaininfoIts={sidebarMaininfo}
        actionButtonText={"More"}
        sideActionOnclick={() => {
          navigate("/admin/expanded");
          dispatch(setSelectedSubPage({ selected: "sales" }));
        }}
      />
      <section className="admin__users-list-container">
        <TagsComp />
        <section className="admin__users-list-body">
          {data
            ? data.usersList.map((user, index) => {
                return (
                  <ListedUserPayout
                    isRequested={user.isRequested}
                    isPayoutRequested={user.isPayoutRequested}
                    showVerifySign={user.isVerified}
                    styleVerifySign={{position: "absolute", top: "25%", left: "5%"}}
                    id={index}
                    key={index}
                    selected={index == selected}
                    setSelected={setSelected}
                    image={user.image}
                    name={user.name}
                    location={user.location}
                    emails={user.emails}
                    phone={user.phone}
                    isPaid={user.isPaid}
                  />
                );
              })
            : null}
        </section>
      </section>
    </div>
  );
};

export default PayoutsAdmin;
