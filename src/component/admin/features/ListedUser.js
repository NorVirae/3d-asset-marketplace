import { FaLocationArrow } from "react-icons/fa";
import UserPurpleInnerStripeBtn from "../../buttons/UserPurpleButton";
import CardArrowPointer from "../home/CardArrowPointer";
import AfilliatedDropdown from "./AfilliatedDropdown";
import FireMailButton from "./FireMailButton";
import LongSelectedCone from "./LongSelectedCone";
import NotifierMail from "./NotifierMail";
import ReportMessageNotifier from "./ReportMessageNotifier";
import VerifiedLogo from "./VerifiedLogo";
import {GoLocation} from "react-icons/go"

const ListedUser = ({
    id,
    selected,
    isAffiliated,
    isRequested,
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
            {showVerifySign && <VerifiedLogo style={styleVerifySign} />}
          </div>
          <div className="admin__users-listed-item location">
            <GoLocation /> {location}
          </div>
          <div className="admin__users-listed-item email">{emails}</div>
          <div className="admin__users-listed-item email">{phone}</div>
          <div className="admin__users-listed-item extra-container">
            {selected ? (
              <div className="admin__users-listed-item extra">
                <NotifierMail isUrgent={true} />
                <FireMailButton />
                <UserPurpleInnerStripeBtn
                  actionButtonOnclick={() => {}}
                  style={{ width: "10rem", padding: "1rem 3rem" }}
                  text={
                    <>
                      <span>BLOCK</span>
                      <span>USER</span>
                    </>
                  }
                />{" "}
              </div>
            ) : (
              <ReportMessageNotifier
                occupantText={isRequested ? "Store Request" : "Report"}
                isRequested={isRequested}
              />
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

  export default ListedUser