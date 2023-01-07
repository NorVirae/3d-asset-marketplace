

import { useState } from "react";
import data from "../../../data/data.json";
import AdminFreebiesSidebar from "../AdminFreebiesSidebar";
import ListedUserCarts from "../features/ListedUserCarts";
import TagsComp from "../TagsComp";

const CartsAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  const [isStoreOwner, setIsStoreOwner] = useState(true);

  const sidebarMaininfo = [
    {
      leftInfo: "Total Products",
      rightInfo: "10 products",
      // showEditableSign: true,
    },

    {
      leftInfo: "Total Sales",
      rightInfo: "72 Sales",
      // showVerifySign: true,
      // showEditableSign: true,
    },

    {
      leftInfo: "Total Wishlist",
      rightInfo: "2430",
      showHeartIcon: true
    },

    {
      leftInfo: "Sales",
      rightInfo: "25,100.00",
      showCartIcon: true
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
      />
      <section className="admin__users-list-container">
        <TagsComp />
        <section className="admin__users-list-body">
          {data
            ? data.usersList.map((user, index) => {
                return (
                  <ListedUserCarts
                    isCarts={true}
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

export default CartsAdmin;
