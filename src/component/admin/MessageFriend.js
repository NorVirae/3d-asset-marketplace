const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";


const MessageFriend = ({ onClick, active = false }) => {
    return (
      <button
        onClick={onClick}
        className={`admin__message-friend ${
          active && "admin__message-friend-active"
        }`}
      >
        <div className="admin__message-friend-inner">
          <img className="admin__message-friend-img" src={WolfGuyImg} alt="" />
          <div className="admin__message-friend-body">
            <h5 className="admin__msg-friend-name">
              Clement Seyfried
              <span className="admin__msg-time">8:00 am</span>
            </h5>
            <p className="admin__msg-preview">
              Howfar the zekie file ain't coming...
            </p>
          </div>
        </div>
      </button>
    );
  };

  export default MessageFriend
