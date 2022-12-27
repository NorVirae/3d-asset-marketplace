
const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const MessageFriend = ({ onClick, active = false }) => {

  return (
    <button
      onClick={onClick}
      className={`user__message-friend ${
        active && "user__message-friend-active"
      }`}
    >
      <div className="user__message-friend-inner">
        <img className="user__message-friend-img" src={WolfGuyImg} alt="" />
        <div className="user__message-friend-body">
          <h5 className="user__msg-friend-name">
            Clement Seyfried
            <span className="user__msg-time">8:00 am</span>
          </h5>
          <p className="user__msg-preview">
            Howfar the zekie file ain't coming...
          </p>
        </div>
      </div>
    </button>
  );
};

export default MessageFriend