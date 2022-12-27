import { FcSettings } from "react-icons/fc";

const SettingsItem = ({ onClick, active = false, itemName }) => {
    return (
      <button
        onClick={onClick}
        className={`admin__settings-item ${
          active && "admin__settings-item-active"
        }`}
      >
        <div className="admin__settings-item-inner">
          <FcSettings />
          <div className="admin__settings-item-body">
            <h5 className="admin__settings-item-name">{itemName}</h5>
          </div>
        </div>
      </button>
    );
  };
  

  export default SettingsItem
