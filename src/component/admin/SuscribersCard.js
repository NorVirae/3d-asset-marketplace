import { FaSearchLocation } from "react-icons/fa";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const CatmanImg = "/assets/image/catman.jpg";

const SuscribersCard = () => {
    return (
      <div className="users__suscribers-card">
        <div className="users__top-bg-image">
          <img className="users__top-bg-image-img" src={WolfGuyImg} />
        </div>
  
        <div className="users__bottom-bg-image-container">
          <img className="users__top-bg-image-profile" src={CatmanImg} />
          <div className="users__suscribers-count-container">
            <h3 className="users__suscribers-count-title">Liqair Studios</h3>
            <small className="users__suscribers-count">219.9k suscribers</small>
          </div>
  
          <p className="users__suscribers-count-info">
            we can only accept the most qualified setters at the moment
          </p>
          <div className="users__suscribers-location">
            <FaSearchLocation /> Enugu, Nigeria.
          </div>
          <button className="users__suscribers-btn">
            <span>Suscribed</span>
          </button>
        </div>
      </div>
    );
  };

  export default SuscribersCard
