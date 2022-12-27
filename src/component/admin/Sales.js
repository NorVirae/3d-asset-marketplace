import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { GrStripe } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import SalesDropdown from "./SalesDropdown";

const Sales = () => {
    const [activeSideUser, setActiveSideUser] = useState(0);
    const settingsItems = [
      "Notification",
      "New Folder(1)",
      "New Folder(2)",
      "Loooty backup",
    ];
    const [toggleFiatCrypto, setToggleFiatCrypto] = useState("fiat");
    const [priceSelect, setPriceSelect] = useState("$20");
    const [selectedPaymentGateway, setSelectedPaymentGateway] =
      useState("paypal");
    const [showDropdown, setShowDropdown] = useState(false);
  
    return (
      <section className="admin__sales">
        <div className="admin__sales-sidebar">
          <section className="admin__sales-sidebar-header">
            <div
              onClick={(e) => setToggleFiatCrypto("fiat")}
              className={`admin__sales-sidebar-header-item ${
                toggleFiatCrypto == "fiat" && "admin__sales-shi-selected"
              }`}
            >
              FIAT
            </div>
  
            <div
              onClick={(e) => setToggleFiatCrypto("crypto")}
              className={`admin__sales-sidebar-header-item ${
                toggleFiatCrypto == "crypto" && "admin__sales-shi-selected"
              }`}
            >
              CRYPTO
            </div>
          </section>
  
          <section className="admin__sales-sidebar-body">
            <div
              onClick={(e) => setSelectedPaymentGateway("paypal")}
              className={`admin__sales-sidebar-body-item ${
                selectedPaymentGateway === "paypal" &&
                "admin__sales-sidebar-bi-selected"
              }`}
            >
              <span>
                <FaPaypal /> Paypal
              </span>
            </div>
  
            <div
              onClick={(e) => setSelectedPaymentGateway("stripe")}
              className={`admin__sales-sidebar-body-item ${
                selectedPaymentGateway === "stripe" &&
                "admin__sales-sidebar-bi-selected"
              }`}
            >
              <span>
                <GrStripe /> Stripe
              </span>
            </div>
          </section>
        </div>
        <div className="admin__sales-main-content">
          <section className="admin__sales-mc-header">
            <div className="admin__sales-mc-left">Notice:</div>
            <div className="admin__sales-mc-right">
              We send out payment every 1<sup>st</sup> and 15<sup>th</sup> of
              every month You must have a balance of $20 or more at the time to be
              eligible.
              <p>
                if you do not meet the minimum balance, no worries, we will try
                again next time.
              </p>
            </div>
          </section>
  
          <section className="admin__sales-mc-body">
            <div className="admin__sales-mc-item-container">
              <div className="admin__sales-mc-item-header">PAYOUT BALANCE</div>
  
              <div className="admin__sales-mc-item-body">
                <div className="admin__sales-form-group">
                  <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="admin__sales-mc-dropdown"
                  >
                    <span>{priceSelect}</span>
                  </div>
  
                  <SalesDropdown
                    setSelected={setPriceSelect}
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                  />
                  <IoMdArrowDropdown className="admin__sales-mc-dropdown-icon" />
                </div>
                <p>Payouts will only be sent when your balance reaches $20</p>
              </div>
            </div>
  
            <div className="admin__sales-mc-item-container">
              <div className="admin__sales-mc-item-header">PAYPAL EMAIL</div>
  
              <div className="admin__sales-mc-item-body">
                <div className="admin__sales-form-group">
                  <div className="admin__sales-skew-container">
                    <input
                      placeholder="Fill in your Email here"
                      className="admin__sales-mc-input"
                    />
                  </div>
                  <div className="admin__sales-mc-input-edit-skew-container">
                    <MdModeEditOutline className="admin__sales-mc-input-edit" />
                  </div>
                </div>
                <p>This is the Email we use for payouts</p>
              </div>
            </div>
  
            <div className="admin__sales-mc-item-container button">
              <button className="admin__sales-mc-item-btn">
                <span>SAVE</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    );
  };

  export default Sales
