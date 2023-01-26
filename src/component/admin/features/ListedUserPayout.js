import UserPurpleInnerStripeBtn from "../../buttons/UserPurpleButton";
import CardArrowPointer from "../home/CardArrowPointer";
import AfilliatedDropdown from "./AfilliatedDropdown";
import FireMailButton from "./FireMailButton";
import LongSelectedCone from "./LongSelectedCone";

import { GoLocation, GoVerified } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { BiMessageError } from "react-icons/bi";
import { FcApprove } from "react-icons/fc";

const PayoutsOptionsDispay = ({ isPaid = false, isPayoutRequested = false }) => {
  if (isPayoutRequested) {
    return (
      <div className="admin__listed-user-payment-request">
        <BiMessageError className="admin__listed-user-payment-request-icon" />
        <span className="admin__listed-user-payment-request-text">
          Payment Request
        </span>
        <BsDot className="admin__listed-user-payment-request-icon sub" />
        <span className="admin__listed-user-payment-request-text">
          $ 7,800.00
        </span>
      </div>
    );
  }
  return (
    <div className="admin__listed-user-time-pay-container">
      {isPaid ? (
        <GoVerified className="admin__listed-user-time-payout-icon" />
      ) : (
        <MdOutlineTimer className="admin__listed-user-time-payout-icon" />
      )}
      <span className="admin__listed-user-time-payout-text">$ 15.00</span>
    </div>
  );
};

const ListedUserPayout = ({
  id,
  selected,
  isPaid,
  isAffiliated,
  isPayoutRequested,
  styleVerifySign,
  setSelected,
  showVerifySign,
  extra,
  image,
  name,
  location,
  emails,
  phone,
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
        <div className="admin__users-listed-item email">Fiat - Payoneer</div>

        <div className="admin__users-listed-item email">{emails}</div>
        <div className="admin__users-listed-item extra-container">
            
          {selected ? (
            <div className="admin__users-listed-item extra">
              <BiMessageError className="admin__listed-user-payment-request-icon" />
              <FireMailButton text={"POSTPONE"} />
              <UserPurpleInnerStripeBtn
                actionButtonOnclick={() => {}}
                style={{ width: "10rem", padding: "1rem 3rem" }}
                text={"PAY"}
              />{" "}
            </div>
          ) : (
            <PayoutsOptionsDispay isPaid={isPaid} isPayoutRequested={isPayoutRequested}/>
          )}
        </div>
        <CardArrowPointer
          style={{
            top: "40%",
            right: "1.2%",
            color: `${selected ? "#7C187A" : "#3B3B43"}`,
            transform: `rotate(${selected ? "-90deg" : "90deg"})`,
          }}
        />
      </div>
      {isAffiliated && selected && <AfilliatedDropdown />}
    </section>
  );
};

export default ListedUserPayout;
