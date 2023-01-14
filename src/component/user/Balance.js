import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { GrStripe } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import SalesDropdown from "./SalesDropdown";


const Balance = () => {
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
      <section className="user__sales">
        <div className="user__sales-sidebar">
          <section className="user__sales-sidebar-header">
            <div
              onClick={(e) => setToggleFiatCrypto("fiat")}
              className={`user__sales-sidebar-header-item ${
                toggleFiatCrypto == "fiat" && "user__sales-shi-selected"
              }`}
            >
              FIAT
            </div>
  
            <div
              onClick={(e) => setToggleFiatCrypto("crypto")}
              className={`user__sales-sidebar-header-item ${
                toggleFiatCrypto == "crypto" && "user__sales-shi-selected"
              }`}
            >
              CRYPTO
            </div>
          </section>
  
          <section className="user__sales-sidebar-body">
            <div
              onClick={(e) => setSelectedPaymentGateway("paypal")}
              className={`user__sales-sidebar-body-item ${
                selectedPaymentGateway === "paypal" &&
                "user__sales-sidebar-bi-selected"
              }`}
            >
              <span>
                <FaPaypal /> Paypal
              </span>
            </div>
  
            <div
              onClick={(e) => setSelectedPaymentGateway("stripe")}
              className={`user__sales-sidebar-body-item ${
                selectedPaymentGateway === "stripe" &&
                "user__sales-sidebar-bi-selected"
              }`}
            >
              <span>
                <GrStripe /> Stripe
              </span>
            </div>
          </section>
        </div>
        <div className="user__sales-main-content">
          <section className="user__sales-mc-header">
            <div className="user__sales-mc-left">Notice:</div>
            <div className="user__sales-mc-right">
              We send out payment every 1<sup>st</sup> and 15<sup>th</sup> of
              every month You must have a balance of $20 or more at the time to be
              eligible.
              <p>
                if you do not meet the minimum balance, no worries, we will try
                again next time.
              </p>
            </div>
          </section>
  
          <section className="user__sales-mc-body">
            <div className="user__sales-mc-item-container">
              <div className="user__sales-mc-item-header">PAYOUT BALANCE</div>
  
              <div className="user__sales-mc-item-body">
                <div className="user__sales-form-group">
                  <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="user__sales-mc-dropdown"
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
                  <IoMdArrowDropdown className="user__sales-mc-dropdown-icon" />
                </div>
                <p>Payouts will only be sent when your balance reaches $20</p>
              </div>
            </div>
  
            <div className="user__sales-mc-item-container">
              <div className="user__sales-mc-item-header">PAYPAL EMAIL</div>
  
              <div className="user__sales-mc-item-body">
                <div className="user__sales-form-group">
                  <div className="user__sales-skew-container">
                    <input
                      placeholder="Fill in your Email here"
                      className="user__sales-mc-input"
                    />
                  </div>
                  <div className="user__sales-mc-input-edit-skew-container">
                    <MdModeEditOutline className="user__sales-mc-input-edit" />
                  </div>
                </div>
                <p>This is the Email we use for payouts</p>
              </div>
            </div>
  
            <div className="user__sales-mc-item-container button">
              <button className="user__sales-mc-item-btn">
                <span>SAVE</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    );
  };


  export default Balance