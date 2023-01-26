import { useState } from "react";
import { FcSettings } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";
import { SuscribeInput } from "../footer/footer";
import OrderItem from "./OrderItem";
import SettingsItem from "./SettingsItem";



const Settings = () => {
    const [activeSideUser, setActiveSideUser] = useState(0);
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const settingsItems = [
      "Notification",
      "Account",
      "Messaging",
      "Password",
      "User Name",
      "Blocking",
      "Payment",
      "Store",
      "Profile",
      "Sales",
    ];
    return (
      <section className="user__settings">
        <div className="user__settings-inner">
          <section className="user__settings-sidebar">
            <section className="user__settings-sidebar-header">
              <div className="user__settings-sidebar-header-item">
                <span className="user__settings-sidebar-header-item-text">
                  {settingsItems[activeSideUser]}
                </span>
              </div>
            </section>
  
            <section className="user__settings-sidebar-body">
              <SettingsItem
                itemName={"Notification"}
                onClick={() => setActiveSideUser(0)}
                active={activeSideUser === 0}
              />
              <SettingsItem
                itemName={"Account"}
                onClick={() => setActiveSideUser(1)}
                active={activeSideUser === 1}
              />
              <SettingsItem
                itemName={"Messaging"}
                onClick={() => setActiveSideUser(2)}
                active={activeSideUser === 2}
              />
              <SettingsItem
                itemName={"Password"}
                onClick={() => setActiveSideUser(3)}
                active={activeSideUser === 3}
              />
              <SettingsItem
                itemName={"User Name"}
                onClick={() => setActiveSideUser(4)}
                active={activeSideUser === 4}
              />
              <SettingsItem
                itemName={"Blocking"}
                onClick={() => setActiveSideUser(5)}
                active={activeSideUser === 5}
              />
              <SettingsItem
                itemName={"Payment"}
                onClick={() => setActiveSideUser(6)}
                active={activeSideUser === 6}
              />
              <SettingsItem
                itemName={"Store"}
                onClick={() => setActiveSideUser(7)}
                active={activeSideUser === 7}
              />
              <SettingsItem
                itemName={"Profile"}
                onClick={() => setActiveSideUser(8)}
                active={activeSideUser === 8}
              />
              <SettingsItem
                itemName={"Sales"}
                onClick={() => setActiveSideUser(9)}
                active={activeSideUser === 9}
              />
            </section>
  
            <section className="user__settings-sidebar-footer">
              <button className="user__settings-trash-btn">
                <FcSettings className="user__settings-trash-btn-logo" />
                <span className="user__settings-trash-btn-text">STORE</span>
              </button>
            </section>
          </section>
  
          <section className="user__main-sett-container">
            <div className="user__main-sett-header">
              <span className="user__main-sett-header-text">
                the name will appear on your customers billing statement
              </span>
              {isDesktop && (
                <SuscribeInput
                  style={{}}
                  btnStyle={{
                    padding: ".5rem 2rem",
                    // height: "1.7rem",
                    // right: "1.7%",
                  }}
                  controlStyle={{ padding: ".4rem 8rem" }}
                />
              )}
            </div>
  
            <div className="user__main-sett-body">
              <div className="user__main-sett-body-left">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
  
              <div className="user__main-sett-body-left">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
            </div>
  
            <div className="user__main-sett-footer"></div>
          </section>
        </div>
      </section>
    );
  };
  
  export default Settings