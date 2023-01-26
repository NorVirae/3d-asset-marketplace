export const OrderCheckbox = ({ isActive = true, setIsActive }) => {
    return (
      <div
        style={{ opacity: "1" }}
        onClick={() => setIsActive(!isActive)}
        className="user__main-sett-checkbox"
      >
        <div
          style={{ backgroundColor: `${isActive ? "transparent" : "#FF9700"}` }}
          className="user__main-sett-checkbox-active"
        ></div>
      </div>
    );
  };

  export default OrderCheckbox