import { useState } from "react";

import data from "../../data/data.json";

import ListedUser from "../admin/features/ListedUser";
import TagsComp from "../admin/TagsComp";

const Affiliates = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="admin__users-container affiliates">
      <section className="admin__users-list-container">
        <TagsComp />
        <section className="admin__users-list-body">
          {data
            ? data.usersList.map((user, index) => {
                return (
                  <ListedUser
                    isUser={true}
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

export default Affiliates;
