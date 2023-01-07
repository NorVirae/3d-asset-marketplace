import { useState } from "react";

import AdminFreebiesSidebar from "../AdminFreebiesSidebar";

import TagsComp from "../TagsComp";
import data from "../../../data/data.json";
import ListedUser from "../features/ListedUser";


const UsersAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  return (
    <div className="admin__users-container">
      <AdminFreebiesSidebar
        type="user"
        setActiveSideTab={setActiveSideTab}
        activeSideTab={activeSideTab}
      />
      <section className="admin__users-list-container">
        <TagsComp />
        <section className="admin__users-list-body">
          {data
            ? data.usersList.map((user, index) => {
                return (
                  <ListedUser
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

export default UsersAdmin;
