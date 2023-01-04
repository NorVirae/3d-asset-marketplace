import { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { VscTriangleLeft } from "react-icons/vsc";
import UserPurpleInnerStripeBtn from "../buttons/UserPurpleButton";
import AdminFreebiesSidebar, { VerifiedLogo } from "./AdminFreebiesSidebar";
import { CardArrowPointer } from "./HomeAdmin";
import TagsComp from "./TagsComp";
import data from "../../data/data.json";

import { HiMail } from "react-icons/hi";

const CatmanImg = "/assets/image/catman.jpg";

export const LongSelectedCone = ({ style }) => {
  return (
    <div style={style} className="admin__users-selelected-logo-container">
      <VscTriangleLeft className="admin__users-selelected-logo" />
    </div>
  );
};

const NotifierMail = ({ isUrgent = false }) => {
  return (
    <div className="admin__report-message-notifier-icon-container">
      {!isUrgent && <div className="admin__report-message-notify"></div>}
      <HiMail
        className={`admin__report-message-notifier-icon ${
          isUrgent && "urgency"
        }`}
      />
    </div>
  );
};

export const ReportMessageNotifier = ({
  occupantText = "Report",
  isRequested,
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="admin__report-message-notifier"
    >
      <NotifierMail isUrgent={isRequested} />
      <span
        className={`admin__report-message-notifier-text ${
          isRequested && "requested"
        }`}
      >
        {occupantText}
      </span>
    </div>
  );
};

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const AffiliatedItem = ({
  productName = "Beach House with Rumps",
  productLink = "https://loooty.vercel.app/...",
  productCoverImage = WolfGuyImg,
  productQty = 20,
  productPpb = "USD 20.00",
  productAccumulated = "USD 400.00",
}) => {
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <div className="admin__users-afilliated-item">
      <div className="admin__users-afilliated-item-sub container">
        <img
          className="admin__users-afilliated-item-sub image"
          src={productCoverImage}
        />
      </div>
      <div className={`admin__users-afilliated-item-sub product-name ${isEnabled && "enabled"} `}>
        {productName}
      </div>
      <div className="admin__users-afilliated-item-sub product-link">
        {productLink}
      </div>

      <div className="admin__users-afilliated-item-sub product-qty">
        {productQty}
      </div>

      <div className="admin__users-afilliated-item-sub product-ppb">
        {productPpb}
      </div>

      <div className="admin__users-afilliated-item-sub product-accumulated">
        {productAccumulated}
      </div>
      <div className="admin__users-afilliated-item-sub modifiers">
        <button onClick={() => setIsEnabled(true)} className={`admin__users-afilliated-modifier-btn ${isEnabled && "enabled"}`}>
          Enable
        </button>
        <button onClick={() => setIsEnabled(false)} className={`admin__users-afilliated-modifier-btn ${!isEnabled && "disabled"}`}>
          Disable
        </button>
      </div>
    </div>
  );
};

const AfilliatedDropdown = () => {
  return (
    <section className="admin__listed-users-afilliated-container">
      <div className="admin__listed-users-afilliated-container-inner">
        <AffiliatedItem />
        <AffiliatedItem />
        <AffiliatedItem />
      </div>
    </section>
  );
};

export const ListedUser = ({
  id,
  selected,
  isAffiliated,
  isRequested,
  styleVerifySign,
  setSelected,
  showVerifySign,
  extra,
  image,
  name,
  location,
  emails,
  phone,
}) => {
  return (
    <section className="admin__users-listed-outer">
      <div
        onClick={() => setSelected(id)}
        className={`admin__users-listed-user ${selected && "selected"}`}
      >
        {selected && <LongSelectedCone />}
        <div className="admin__users-listed-item image">
          <img className="admin__users-listed-item image" src={image} />
        </div>
        <div className="admin__users-listed-item name">
          {name}
          {showVerifySign && <VerifiedLogo style={styleVerifySign} />}
        </div>
        <div className="admin__users-listed-item location">
          <FaLocationArrow /> {location}
        </div>
        <div className="admin__users-listed-item email">{emails}</div>
        <div className="admin__users-listed-item email">{phone}</div>
        <div className="admin__users-listed-item extra-container">
          {selected ? (
            <div className="admin__users-listed-item extra">
              <NotifierMail isUrgent={true} />
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
              />{" "}
            </div>
          ) : (
            <ReportMessageNotifier
              occupantText={isRequested ? "Store Request" : "Report"}
              isRequested={isRequested}
            />
          )}
        </div>
        <CardArrowPointer
          style={{
            top: "40%",
            right: "1.2%",
            color: `${selected ? "#7C187A" : "#3B3B43"}`,
            transform: `rotate(${selected ? "-90deg" : "90deg"})`,
          }}
        />
      </div>
      {isAffiliated && selected && <AfilliatedDropdown />}
    </section>
  );
};

const FireMailButton = () => {
  return (
    <button className="admin__users-fire-button">
      <RiMailSendFill className="admin__users-fire-button-icon" />
    </button>
  );
};

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
