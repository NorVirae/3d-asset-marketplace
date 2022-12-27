const CatmanImg = "/assets/image/catman.jpg";

const SenderMsg = () => {
    return (
      <section className="admin__main-sender-msg-cont">
        <img className="admin__main-sender-msg-img" src={CatmanImg} alt="" />
        <div className="admin__main-sender-msg-inner">
          <p className="admin__main-sender-talk">Hi There</p>
          <div className="admin__main-sender-time">seen 12:00am</div>
        </div>
      </section>
    );
  };

  export default SenderMsg
