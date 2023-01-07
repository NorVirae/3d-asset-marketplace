import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import VerifiedLogo from "./VerifiedLogo";

const SidebarInfoField = ({
  showHeartIcon,
  showCartIcon,
  leftText = "Rating",
  rightText = "Excellent",
  showVerifySign,
  showEditableSign,
}) => {
  return (
    <div className="admin__sidebar-info-field">
      <span className="admin__sidebar-info-field-left">{leftText}</span>
      <span className="admin__sidebar-info-field-right">
        {showHeartIcon && <BsFillSuitHeartFill />}
        {showCartIcon && <FaShoppingCart />}
        {rightText}
      </span>
      {showVerifySign && <VerifiedLogo />}
      {showEditableSign && (
        <div className="admin__sidebar-editable">
          <MdModeEdit style={{ color: "#44434F" }} />
        </div>
      )}
    </div>
  );
};

export default SidebarInfoField;
