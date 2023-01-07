import { AiTwotoneMessage } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const ProductInfoProfile = () => {
    return (
      <div className="admin__sidebar-profile-container">
        <div className="admin__sidebar-img-container">
          <img className="admin__sidebar-img" src={WolfGuyImg} alt="wolf-img" />
        </div>
        <h3>Beach House with Rumps</h3>
        <h6>By Pascal Garten in 3D assets</h6>
        <div className="admin__sidebar-rating-container">
          <span className="admin__main-rating-container">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4</span>
          </span>
  
          <span className="admin__sidebar-message-container">
            <AiTwotoneMessage />
            <span>0</span>
          </span>
        </div>
      </div>
    );
  };

  export default ProductInfoProfile