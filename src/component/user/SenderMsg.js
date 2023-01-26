const CatmanImg = "/assets/image/catman.jpg";

const SenderMsg = () => {
    return (
      <section className="user__main-sender-msg-cont">
        <img className="user__main-sender-msg-img" src={CatmanImg} alt="" />
        <div className="user__main-sender-msg-inner">
          <p className="user__main-sender-talk">Hi There</p>
          <div className="user__main-sender-time">seen 12:00am</div>
        </div>
      </section>
    );
  };
  
  export default SenderMsg