import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaLocationArrow, FaShoppingCart } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import UserPurpleInnerStripeBtn from "../../buttons/UserPurpleButton";
import CardArrowPointer from "../home/CardArrowPointer";
import AfilliatedDropdownCarts from "./AfilliatedDropdownCarts";
import LongSelectedCone from "./LongSelectedCone";
import {GoLocation} from "react-icons/go"

const CartAndHeart = ({style, selected}) => {
  return (
    <section style={style} className="admin__users-listed-cart">
    <div className="admin__users-listed-cart-item heart">
      <BsFillSuitHeartFill />
      2430
    </div>
    <div className="admin__users-listed-cart-item">
      <FaShoppingCart />
      2430
    </div>
  </section>
  );
};


const CartAndHeartSelected = ({style, selected}) => {
  return (
    <section style={style} className="admin__users-listed-cart-selected">
    <div className="admin__users-listed-cart-item-selected heart">
      <BsFillSuitHeartFill />
      2430
    </div>
    <div className="admin__users-listed-cart-item-selected">
      <FaShoppingCart />
      2430
    </div>
  </section>
  );
};


export const ListedUserCarts = ({
  isUser=false,
  id,
  selected,
  isAffiliated,
  setSelected,
  image,
  name,
  location,
  emails,
}) => {
  return (
    <section className="admin__users-listed-outer">
      <div
        onClick={() => setSelected(id)}
        className={`admin__users-listed-user ${selected && "selected"}`}
      >
        {selected && <LongSelectedCone />}
        <div className="admin__users-listed-item image">
          <img className="admin__users-listed-item image" src={image} />
        </div>
        <div className="admin__users-listed-item name">
          {name}
          {/* {showVerifySign && <VerifiedLogo style={styleVerifySign} />} */}
        </div>
        <div className="admin__users-listed-item location">
          <GoLocation /> {location}
        </div>
        <div className="admin__users-listed-item email">{emails}</div>
        <div className="admin__users-listed-item email">59 products</div>
        {!isUser && <div className="admin__users-listed-item extra-container">
          {selected && !isUser ? (
            <div style={{left: '-40%'}} className="admin__users-listed-item extra">
              {/* <NotifierMail isUrgent={true} /> */}
              {/* <FireMailButton /> */}
              <CartAndHeartSelected  style={{ color: "#FF9700",  }}/>
              
              <UserPurpleInnerStripeBtn
                actionButtonOnclick={() => {}}
                style={{ width: "10rem", padding: "1rem 3rem" }}
                text={
                  <span style={{ transform: "skew(-25deg)" }}>
                    <RiMailSendFill className="admin__users-fire-button-icon" />
                  </span>
                }
              />{" "}
            </div>
          ) : (
            // <ReportMessageNotifier
            //   occupantText={isRequested ? "Store Request" : "Report"}
            //   isRequested={isRequested}
            // />
            <CartAndHeart/>
          )}
        </div>}
        <CardArrowPointer
          style={{
            top: "40%",
            right: "1.2%",
            color: `${selected ? "#7C187A" : "#3B3B43"}`,
            transform: `rotate(${selected ? "-90deg" : "90deg"})`,
          }}
        />
      </div>
      {isAffiliated && selected && <AfilliatedDropdownCarts />}
    </section>
  );
};

export default ListedUserCarts;
