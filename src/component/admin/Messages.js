import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import MessageFriend from "./MessageFriend";
import ReceiverMsg from "./ReceiverMsg";
import SenderMsg from "./SenderMsg";

const Messages = () => {
    const [activeSideUser, setActiveSideUser] = useState(0);
    const [activeSideTab, setActiveSideTab] = useState("users");
    return (
      <section className="admin__messages">
        <div className="admin__messages-inner">
          <section className="admin__message-sidebar">
            <section className="admin__message-sidebar-header">
              <div
                onClick={() => setActiveSideTab("users")}
                className={`admin__message-sidebar-header-item ${
                  activeSideTab === "users" &&
                  "admin__message-sidebar-header-item-active"
                }`}
              >
                USERS
              </div>
  
              <div
                onClick={() => setActiveSideTab("loooty")}
                className={`admin__message-sidebar-header-item ${
                  activeSideTab === "loooty" &&
                  "admin__message-sidebar-header-item-active"
                }`}
              >
                LOOOTY
                <div className="admin__message-notify"></div>
              </div>
            </section>
  
            <section className="admin__message-sidebar-body">
              <MessageFriend
                onClick={() => setActiveSideUser(0)}
                active={activeSideUser === 0}
              />
              <MessageFriend
                onClick={() => setActiveSideUser(1)}
                active={activeSideUser === 1}
              />
              <MessageFriend
                onClick={() => setActiveSideUser(2)}
                active={activeSideUser === 2}
              />
            </section>
  
            <section className="admin__message-sidebar-footer">
              <button className="admin__message-trash-btn">
                <BsTrash className="admin__message-trash-btn-logo" />
                <span className="admin__message-trash-btn-text">Trash</span>
              </button>
            </section>
          </section>
  
          <section className="admin__main-msg-container">
            <div className="admin__main-msg-header">
              <span className="admin__main-msg-header-text">
                Clement Seyfried
              </span>
            </div>
  
            <div className="admin__main-msg-body">
              <SenderMsg />
              <ReceiverMsg />
            </div>
  
            <div className="admin__main-msg-footer">
              <form className="admin__main-msg-send-container">
                <div className="admin__msg-form-group">
                  <div className="admin__msg-form-skew-container">
                    <button className="admin__msg-form-doc-btn">
                      <MdAttachFile />
                    </button>
  
                    <input className="admin__msg-form-control" />
  
                    <button className="admin__msg-form-send-btn">
                      <RiMailSendFill style={{ transform: "skewX(20deg)" }} />
                      <span style={{ transform: "skewX(20deg)" }}> Send</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    );
  };

  export default Messages
