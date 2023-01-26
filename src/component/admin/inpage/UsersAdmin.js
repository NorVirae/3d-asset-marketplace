import { useState } from "react";

import AdminFreebiesSidebar from "../AdminFreebiesSidebar";

import TagsComp from "../TagsComp";
import data from "../../../data/data.json";
import ListedUser from "../features/ListedUser";
import { useNavigate } from "react-router-dom";
import { setSelectedSubPage } from "../../../redux/reducers/userStateReducer";
import { useDispatch } from "react-redux";

const UsersAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div className="admin__users-container">
      <AdminFreebiesSidebar
        type="user"
        setActiveSideTab={setActiveSideTab}
        activeSideTab={activeSideTab}
        sideActionOnclick={() => {
          navigate("/admin/expanded");
          dispatch(setSelectedSubPage({ selected: "profile" }));
        }}
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
