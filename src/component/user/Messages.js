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
      <section className="user__messages">
        <div className="user__messages-inner">
          <section className="user__message-sidebar">
            <section className="user__message-sidebar-header">
              <div
                onClick={() => setActiveSideTab("users")}
                className={`user__message-sidebar-header-item ${
                  activeSideTab === "users" &&
                  "user__message-sidebar-header-item-active"
                }`}
              >
                USERS
              </div>
  
              <div
                onClick={() => setActiveSideTab("loooty")}
                className={`user__message-sidebar-header-item ${
                  activeSideTab === "loooty" &&
                  "user__message-sidebar-header-item-active"
                }`}
              >
                LOOOTY
                <div className="user__message-notify"></div>
              </div>
            </section>
  
            <section className="user__message-sidebar-body">
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
  
            <section className="user__message-sidebar-footer">
              <button className="user__message-trash-btn">
                <BsTrash className="user__message-trash-btn-logo" />
                <span className="user__message-trash-btn-text">Trash</span>
              </button>
            </section>
          </section>
  
          <section className="user__main-msg-container">
            <div className="user__main-msg-header">
              <span className="user__main-msg-header-text">Clement Seyfried</span>
            </div>
  
            <div className="user__main-msg-body">
              <SenderMsg />
              <ReceiverMsg />
            </div>
  
            <div className="user__main-msg-footer">
              <form className="user__main-msg-send-container">
                <div className="user__msg-form-group">
                  <div className="user__msg-form-skew-container">
                    <button className="user__msg-form-doc-btn">
                      <MdAttachFile />
                    </button>
  
                    <input className="user__msg-form-control" />
  
                    <button className="user__msg-form-send-btn">
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