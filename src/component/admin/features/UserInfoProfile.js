import { FaLocationArrow } from "react-icons/fa";

const CatmanImg = "/assets/image/catman.jpg";

const UserInfoProfile = () => {
    return (
      <div className="admin__sidebar-profile-container">
        <div className="admin__sidebar-user-img-container">
          <img className="admin__sidebar-user-img" src={CatmanImg} alt="wolf-img" />
        </div>
        <h3>Steven james</h3>
        <h6>219.9k suscribers</h6>
        <div className="admin__sidebar-user-loc-info">
        {/* #919198 */}
        <FaLocationArrow/> Enugu, Nigeria.
        </div>
      </div>
    );
  };

  export default UserInfoProfile