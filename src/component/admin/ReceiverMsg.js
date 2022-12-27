const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const ReceiverMsg = () => {
    return (
      <section className="admin__main-receiver-msg-cont">
        <div className="admin__main-receiver-msg-inner">
          <p>How ya doing?</p>
          <div>seen 12:00am</div>
        </div>
        <img className="admin__main-receiver-msg-img" src={WolfGuyImg} alt="" />
      </section>
    );
  };

  export default ReceiverMsg
