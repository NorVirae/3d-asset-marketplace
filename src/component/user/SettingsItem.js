import { FcSettings } from "react-icons/fc";



const SettingsItem = ({ onClick, active = false, itemName }) => {
    return (
      <button
        onClick={onClick}
        className={`user__settings-item ${
          active && "user__settings-item-active"
        }`}
      >
        <div className="user__settings-item-inner">
          <FcSettings />
          <div className="user__settings-item-body">
            <h5 className="user__settings-item-name">{itemName}</h5>
          </div>
        </div>
      </button>
    );
  };

  export default SettingsItem