import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import LandCard from "../card/landCard";
import { SuscribeInput } from "../footer/footer";
import LibraryItem from "./LibraryItem";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";
const TsunamiImg = "/assets/image/tsunami.jpg";
const ScaryImg = "/assets/image/scary.jpg";
const CatmanImg = "/assets/image/catman.jpg";
const coloredhouseImg = "/assets/image/coloredhouse.webp";


const Library = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const settingsItems = [
    "Notification",
    "New Folder(1)",
    "New Folder(2)",
    "Loooty backup",
  ];
  return (
    <section className="admin__library">
      <div className="admin__library-inner">
        <section className="admin__library-sidebar">
          <section className="admin__library-sidebar-header">
            <div className="admin__library-sidebar-header-item">
              <span className="admin__library-sidebar-header-item-text">
                {settingsItems[activeSideUser]}
              </span>
            </div>
          </section>

          <section className="admin__library-sidebar-body">
            <button className="admin__library-trash-btn">
              <span className="admin__library-trash-btn-text">
                Create New Folder
              </span>
              <FaPlusCircle className="admin__library-trash-btn-logo" />
            </button>
          </section>

          <section className="admin__library-sidebar-body">
            <LibraryItem
              prodNumber={21}
              itemName={"All Products"}
              onClick={() => setActiveSideUser(0)}
              active={activeSideUser === 0}
            />
            <LibraryItem
              prodNumber={59}
              itemName={"New Folder(1)"}
              onClick={() => setActiveSideUser(1)}
              active={activeSideUser === 1}
            />
            <LibraryItem
              prodNumber={0}
              itemName={"New Folder(2)"}
              onClick={() => setActiveSideUser(2)}
              active={activeSideUser === 2}
            />
            <LibraryItem
              prodNumber={34}
              itemName={"Loooty backup"}
              onClick={() => setActiveSideUser(3)}
              active={activeSideUser === 3}
            />
          </section>
        </section>

        <section className="admin__main-lib-container">
          <div className="admin__main-lib-header">
            <SuscribeInput
              style={{}}
              btnStyle={{
                padding: ".1rem 2rem",
                height: "1.7rem",
                right: "1.7%",
              }}
              controlStyle={{ padding: ".4rem 8rem" }}
            />
          </div>

          <div className="admin__main-lib-body">
            <LandCard img={WolfGuyImg} title={""} titleAffirm={""} />
            <LandCard img={TsunamiImg} title={""} titleAffirm={""} />
            <LandCard img={ScaryImg} title={""} titleAffirm={""} />
            <LandCard img={CatmanImg} title={""} titleAffirm={""} />
            <LandCard img={coloredhouseImg} title={""} titleAffirm={""} />
          </div>

          <div className="admin__main-lib-footer"></div>
        </section>
      </div>
    </section>
  );
};

export default Library;
