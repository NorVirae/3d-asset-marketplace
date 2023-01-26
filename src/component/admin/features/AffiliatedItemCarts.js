import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const ToggleEnable = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="admin__users-afilliated-item-sub modifiers">
      <button
        onClick={() => setIsEnabled(true)}
        className={`admin__users-afilliated-modifier-btn ${
          isEnabled && "enabled"
        }`}
      >
        Enable
      </button>
      <button
        onClick={() => setIsEnabled(false)}
        className={`admin__users-afilliated-modifier-btn ${
          !isEnabled && "disabled"
        }`}
      >
        Disable
      </button>
    </div>
  );
};

const AffiliatedItemCarts = ({
  productName = "Beach House with Rumps",
  productLink = "https://loooty.vercel.app/...",
  productCoverImage = WolfGuyImg,
  productQty = 20,
  productPpb = "USD 20.00",
  productAccumulated = "USD 400.00",
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="admin__users-afilliated-item">
      <div className="admin__users-afilliated-item-sub container">
        <img
          className="admin__users-afilliated-item-sub image"
          src={productCoverImage}
        />
      </div>
      <div
        className={`admin__users-afilliated-item-sub product-name ${
          isEnabled && "enabled"
        } `}
      >
        {productName}
      </div>
      {/* <div className="admin__users-afilliated-item-sub product-link">
          {productLink}
        </div> */}

      <div className="admin__users-afilliated-item-sub product-ppb">
        {productPpb}
      </div>

      <div className="admin__users-afilliated-item-sub product-qty">
        {productQty}
      </div>

      <div className="admin__users-afilliated-item-sub wish">
        <BsFillSuitHeartFill />
        24
      </div>

      <div className="admin__users-afilliated-item-sub wish">
        <FaShoppingCart />
        14
      </div>

      {/* <div className="admin__users-afilliated-item-sub product-accumulated">
          {productAccumulated}
        </div> */}
      {/* <div className="admin__users-afilliated-item-sub modifiers">
          <button onClick={() => setIsEnabled(true)} className={`admin__users-afilliated-modifier-btn ${isEnabled && "enabled"}`}>
            Enable
          </button>
          <button onClick={() => setIsEnabled(false)} className={`admin__users-afilliated-modifier-btn ${!isEnabled && "disabled"}`}>
            Disable
          </button>
        </div> */}
    </div>
  );
};

export default AffiliatedItemCarts;
