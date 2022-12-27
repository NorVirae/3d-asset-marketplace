import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSave, FaTwitter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const SocialMediaInput = ({ labelName, onChange, value, type }) => {
    const [save, setIsSave] = useState(true);
  
    return (
      <div className="admin__main-profile-form-group">
        <div className="admin__label-container">
          <label className="admin__main-profile-label">
            <span className={"admin__main-profile-label-inner"}>{labelName}</span>
          </label>
        </div>
  
        <section className="admin__main-profile-form-control-container-social">
          <section className="admin__main-profile-form-control-container-social-inner">
            <div className="admin__main-profile-skew-container-social">
              <div className="admin__main-profile-social-icon-container">
                <FaInstagram
                  style={{
                    color: "385797",
                    fontSize: "2.1rem",
                    transform: "skewX(20deg)",
                  }}
                />
              </div>
              <input
                type={type}
                disabled={save}
                onChange={onChange}
                value={value}
                className="admin__main-profile-form-control-social"
              />
              <span className="admin__main-profile-form-control-edit-btn">
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
  
            <div className="admin__main-profile-skew-container-social">
              <div className="admin__main-profile-social-icon-container">
                <FaTwitter
                  style={{
                    color: "385797",
                    fontSize: "2.1rem",
                    transform: "skewX(20deg)",
                  }}
                />
              </div>
              <input
                type={type}
                disabled={save}
                onChange={onChange}
                value={value}
                className="admin__main-profile-form-control-social"
              />
              <span className="admin__main-profile-form-control-edit-btn">
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
          </section>
  
          <section className="admin__main-profile-form-control-container-social-inner">
            <div className="admin__main-profile-skew-container-social">
              <div className="admin__main-profile-social-icon-container">
                <FaFacebook
                  style={{
                    color: "385797",
                    fontSize: "2.1rem",
                    transform: "skewX(20deg)",
                  }}
                />
              </div>
              <input
                type={type}
                disabled={save}
                onChange={onChange}
                value={value}
                className="admin__main-profile-form-control-social"
              />
              <span className="admin__main-profile-form-control-edit-btn">
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
  
            <div className="admin__main-profile-skew-container-social">
              <div className="admin__main-profile-social-icon-container">
                <FaLinkedin
                  style={{
                    color: "385797",
                    fontSize: "2.1rem",
                    transform: "skewX(20deg)",
                  }}
                />
              </div>
              <input
                type={type}
                disabled={save}
                onChange={onChange}
                value={value}
                className="admin__main-profile-form-control-social"
              />
              <span className="admin__main-profile-form-control-edit-btn">
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
          </section>
        </section>
      </div>
    );
  };
  export default SocialMediaInput
  