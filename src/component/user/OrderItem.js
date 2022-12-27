import { useState } from "react";
import OrderCheckbox from "./OrderCheckbox";



const OrderItem = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    return (
      <div
        onClick={() => setIsChecked(!isChecked)}
        className="user__main-sett-item"
      >
        <OrderCheckbox isActive={isChecked} setIsActive={setIsChecked} />
  
        <div className="user__main-sett-item-body">
          <h4 className="user__main-sett-item-header"> Order Placed</h4>
          <p className="user__main-sett-item-main">
            Anytime an order is placed you will notified
          </p>
        </div>
      </div>
    );
  };
  

  export default OrderItem