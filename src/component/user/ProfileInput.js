import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";



const ProfileInput = ({ labelName, onChange, value, type }) => {
    const [save, setIsSave] = useState(true);
    return (
      <div className="user__main-profile-form-group">
        <div className="user__label-container">
          <label className="user__main-profile-label">
            <span className={"user__main-profile-label-inner"}>{labelName}</span>
          </label>
        </div>
  
        <section className="user__main-profile-form-control-container">
          <div className="user__main-profile-skew-container">
            <input
              type={type}
              disabled={save}
              onChange={onChange}
              value={value}
              className="user__main-profile-form-control"
            />
            <span className="user__main-profile-form-control-edit-btn">
              {save ? (
                <MdEdit
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              ) : (
                <FaSave
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              )}
            </span>
          </div>
  
          <span className="user__main-profile-info">
            This name will appear on your customers billing statement
          </span>
        </section>
      </div>
    );
  };

  export default ProfileInput