import { AiTwotoneMessage } from "react-icons/ai";
import { FaEdit, FaLocationArrow, FaStar } from "react-icons/fa";
import {MdModeEdit} from "react-icons/md"
import {IoIosStar} from "react-icons/io"
import UserPurpleInnerStripeBtn from "../buttons/UserPurpleButton";
import SidebarTabNavigation from "./features/SidebarTabNavigation";
import UserInfoProfile from "./features/UserInfoProfile";
import ProductInfoProfile from "./features/ProductInfoProfile";
import SidebarInfoField from "./features/SidebarInfoField";

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
















const AdminFreebiesSidebar = ({
  isStoreOwner,
  type = "product",
  sidebarMaininfoIts=sidebarMaininfo,
  setActiveSideTab,
  activeSideTab,
  actionButtonText = "EXPAND",
  actionButtonOnclick,
  isPayoutsPage
}) => {
  return (
    <section className="admin__freebies-sidebar">
      <div className={`admin__freebies-header ${isStoreOwner && "store-owner"}`}>
        <SidebarTabNavigation
          isPayoutsPage={isPayoutsPage}
          setActiveSideTab={setActiveSideTab}
          activeSideTab={activeSideTab}
        />
        {type=="user"?<UserInfoProfile/>:  <ProductInfoProfile />}
        {isPayoutsPage && <div className="amdin__sidebar-payment-details">
          PAYMENT DETAILS
        </div>}
        <section className="admin__sidebar-info">
          {sidebarMaininfoIts
            ? sidebarMaininfoIts.map((sidebarMainItem) => {
                return (
                  <SidebarInfoField
                    leftText={sidebarMainItem.leftInfo}
                    rightText={sidebarMainItem.rightInfo}
                    showVerifySign={sidebarMainItem.showVerifySign}
                    showEditableSign={sidebarMainItem.showEditableSign}
                    showHeartIcon={sidebarMainItem.showHeartIcon}
                    showCartIcon={sidebarMainItem.showCartIcon}

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
