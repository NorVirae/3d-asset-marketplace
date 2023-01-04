import { AiTwotoneMessage } from "react-icons/ai";
import { FaEdit, FaLocationArrow, FaStar } from "react-icons/fa";
import {MdModeEdit} from "react-icons/md"
import {IoIosStar} from "react-icons/io"
import UserPurpleInnerStripeBtn from "../buttons/UserPurpleButton";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";
const CatmanImg = "/assets/image/catman.jpg";
const sidebarMaininfo = [
  {
    leftInfo: "Name",
    rightInfo: "Steven James",
  },

  {
    leftInfo: "Username",
    rightInfo: "Stevy112",
  },

  {
    leftInfo: "Location",
    rightInfo: "Enugu, Nigeria",
  },
];

const SidebarTabNavigationItem = ({
  setActiveSideTab,
  activeSideTab,
  showText,
  navigator,
}) => {
  return (
    <div
      onClick={() => setActiveSideTab(navigator)}
      className={`admin__freebies-sidebar-header-item ${
        activeSideTab === navigator &&
        "admin__freebies-sidebar-header-item-active"
      }`}
    >
      {showText}
    </div>
  );
};

export const VerifiedLogo = ({style}) => {
  return (
    <div style={style} className="admin__sidebar-verified">
        <IoIosStar style={{color: "#00FFE6"}}/>
      </div>
  )
}

const SidebarInfoField = ({ leftText = "Rating", rightText = "Excellent", showVerifySign, showEditableSign }) => {
  return (
    <div className="admin__sidebar-info-field">
      <span className="admin__sidebar-info-field-left">{leftText}</span>
      <span className="admin__sidebar-info-field-right">{rightText}</span>
      {showVerifySign && <VerifiedLogo/>}
      {showEditableSign && <div className="admin__sidebar-editable">
        <MdModeEdit style={{color: "#44434F"}}/>
      </div>}
    </div>
  );
};

const sidebarHeaderItemList = [
  {
    navigator: "all-product",
    showText: "ALL PRODUCT",
  },
  {
    navigator: "features",
    showText: "FEATURES",
  },
  {
    navigator: "daily-picks",
    showText: "DAILY PICKS",
  },
];

export const SidebarTabNavigation = ({
  setActiveSideTab,
  activeSideTab,
  itemsList = sidebarHeaderItemList,
}) => {
  return (
    <section className="admin__freebies-sidebar-header">
      {itemsList
        ? itemsList.map((headItem) => {
            return (
              <SidebarTabNavigationItem
                navigator={headItem.navigator}
                showText={headItem.showText}
                key={headItem.navigator}
                setActiveSideTab={setActiveSideTab}
                activeSideTab={activeSideTab}
              />
            );
          })
        : null}

      {/* <div
        onClick={() => setActiveSideTab("features")}
        className={`admin__freebies-sidebar-header-item ${
          activeSideTab === "features" &&
          "admin__freebies-sidebar-header-item-active"
        }`}
      >
        FEATURES
      </div>

      <div
        onClick={() => setActiveSideTab("daily-picks")}
        className={`admin__freebies-sidebar-header-item ${
          activeSideTab === "daily-picks" &&
          "admin__freebies-sidebar-header-item-active"
        }`}
      >
        DAILY&nbsp;PICKS
      </div> */}
    </section>
  );
};

const ProductInfoProfile = () => {
  return (
    <div className="admin__sidebar-profile-container">
      <div className="admin__sidebar-img-container">
        <img className="admin__sidebar-img" src={WolfGuyImg} alt="wolf-img" />
      </div>
      <h3>Beach House with Rumps</h3>
      <h6>By Pascal Garten in 3D assets</h6>
      <div className="admin__sidebar-rating-container">
        <span className="admin__main-rating-container">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>4</span>
        </span>

        <span className="admin__sidebar-message-container">
          <AiTwotoneMessage />
          <span>0</span>
        </span>
      </div>
    </div>
  );
};


const UserInfoProfile = () => {
    return (
      <div className="admin__sidebar-profile-container">
        <div className="admin__sidebar-user-img-container">
          <img className="admin__sidebar-user-img" src={CatmanImg} alt="wolf-img" />
        </div>
        <h3>Steven james</h3>
        <h6>219.9k suscribers</h6>
        <div className="admin__sidebar-user-loc-info">
        {/* #919198 */}
        <FaLocationArrow/> Enugu, Nigeria.
        </div>
      </div>
    );
  };

const AdminFreebiesSidebar = ({
  isStoreOwner,
  type = "product",
  sidebarMaininfoIts=sidebarMaininfo,
  setActiveSideTab,
  activeSideTab,
  actionButtonText = "EXPAND",
  actionButtonOnclick,
}) => {
  return (
    <section className="admin__freebies-sidebar">
      <div className={`admin__freebies-header ${isStoreOwner && "store-owner"}`}>
        <SidebarTabNavigation
          setActiveSideTab={setActiveSideTab}
          activeSideTab={activeSideTab}
        />
        {type=="user"?<UserInfoProfile/>:  <ProductInfoProfile />}

        <section className="admin__sidebar-info">
          {sidebarMaininfoIts
            ? sidebarMaininfoIts.map((sidebarMainItem) => {
                return (
                  <SidebarInfoField
                    leftText={sidebarMainItem.leftInfo}
                    rightText={sidebarMainItem.rightInfo}
                    showVerifySign={sidebarMainItem.showVerifySign}
                    showEditableSign={sidebarMainItem.showEditableSign}

                  />
                );
              })
            : null}

          {/* <div className="admin__sidebar-info-field">
            <span className="admin__sidebar-info-field-left">Rating</span>
            <span className="admin__sidebar-info-field-right">Excellent</span>
          </div>

          <div className="admin__sidebar-info-field">
            <span className="admin__sidebar-info-field-left">
              views this month
            </span>
            <span className="admin__sidebar-info-field-right">814</span>
          </div>

          <div className="admin__sidebar-info-field">
            <span className="admin__sidebar-info-field-left">Total Views</span>
            <span className="admin__sidebar-info-field-right">714,436</span>
          </div>

          <div className="admin__sidebar-info-field">
            <span className="admin__sidebar-info-field-left">WishList</span>
            <span className="admin__sidebar-info-field-right">49</span>
          </div>

          <div className="admin__sidebar-info-field">
            <span className="admin__sidebar-info-field-left">Purchases</span>
            <span className="admin__sidebar-info-field-right">16</span>
          </div> */}

          <div className="admin__sidebar-info-field btn">
            <UserPurpleInnerStripeBtn
              actionButtonText={actionButtonText}
              actionButtonOnclick={actionButtonOnclick}
              style={{ width: "40%" }}
              text={actionButtonText}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AdminFreebiesSidebar;
