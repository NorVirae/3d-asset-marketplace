const NotifyCard = () => {
  return (
    <div className="notify__card">
      <div className="notify__image-container">
        <img src="" alt="img" />
      </div>
      <div className="notify__body">
        <div className="notify__image-body-container">
          <img src="" alt="img" />
        </div>
        <span>Your Product</span>
        <span>dot</span>
        <span>dot</span>
      </div>
    </div>
  );
};

const AllNotificationPage = () => {
  return (
    <section className="notify__container">
      <div className="notify__container-inner">
        <NotifyCard />
      </div>
    </section>
  );
};

export default AllNotificationPage;
