import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { GrStripe } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { ContentRowSales } from "../admin/home/ContentRow";
import { OrangeBtn } from "../landing/slogan";
import SalesDropdown from "./SalesDropdown";
import { VscTriangleDown } from "react-icons/vsc";

const recentActivitiesData = [
  {
    header: "Sales",
    date: "$0",
    target: "$0",
    // email: "Stevenjames82939@gmail.com",
    // adminName: "@Admin.joe",
    // active: false,
  },
  {
    header: "VAT",
    date: "$2",
    target: "$30",
    // email: "Jat@gmail.com",
    // adminName: "@Admin.katsi",
    // active: false,
  },
  {
    header: "Fees - Direct URL",
    date: "$10",
    target: "$3",
    // email: "Osos@gmail.com",
    // adminName: "@Admin.muscow",
    // active: true,
  },
  {
    header: "Fees - Marketplace",
    date: "$22",
    target: "$21",
    // email: "Keenman@gmail.com",
    // adminName: "@Admin.rosco",
    // active: true,
  },
  {
    header: "Total",
    date: "$20",
    target: "$15",
    // email: "ajasco@gmail.com",
    // adminName: "@Admin.cumsou",
    // active: true,
  },
];

const IrregularBtn = () => (
  <div className="user__sales-irregular-btn">
    <div className="user__sales-irregular-spacer"></div>
    <FcSettings className="user__sales-irregular-btn-icon" />
  </div>
);

const BalanceAnnouceCard = ({purple, yellow}) => {
  return (
    <div className={`user__sales-balance-ann-card ${purple && "selected-purple"} ${yellow && "selected-yellow"}`}>
      <span className="user__sales-balance-ann-card-title">Daily Average</span>
      <span className="user__sales-balance-ann-card-value">$0.00</span>
    </div>
  );
};

const DropdownModal = ({ dropdownItems, setSelected }) => {
  return (
    <div className="user__sales-statistics-time-dropdown-modal">
      {dropdownItems
        ? dropdownItems.map((item) => {
            return (
              <span
                onClick={() => setSelected(item)}
                className="user__sales-statistics-drop-item"
              >
                {item}
              </span>
            );
          })
        : null}
    </div>
  );
};

const dropdownItems = ["1 month", "2 month", "3 month", "4 month"];

const DropDownBox = () => {
  const [selected, setSelected] = useState("12 months");
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="user__sales-statistics-time-dropdown">
      {selected}
      <VscTriangleDown className="user__sales-statistics-time-dropdown-icon" />
      <DropdownModal dropdownItems={dropdownItems} />
    </div>
  );
};

const statsbarInfo = [
  {
    percentage: 1,
    date: "Jan 1",
  },
  {
    percentage: 12,
    date: "Feb 10",
  },
  {
    percentage: 3,
    date: "Mar 20",
  },
  {
    percentage: 60,
    date: "April 23",
  },
  {
    percentage: 67,
    date: "May 22",
  },
  {
    percentage: 23,
    date: "June 11",
  },
  {
    percentage: 40,
    date: "August 24",
  },
  {
    percentage: 70,
    date: "Sept 2",
  },
  {
    percentage: 12,
    date: "Oct 1",
  },
  {
    percentage: 80,
    date: "Nov 9",
  },
  {
    percentage: 24,
    date: "Dec 4",
  },
  {
    percentage: 11,
    date: "Jan 5",
  },
  {
    percentage: 8,
    date: "Feb 3",
  },
];

const StatsiticsBar = ({ percentage, date }) => (
  <section className="user__sales-statistics-bar">
    <div
      style={{ height: `${percentage}%` }}
      className="user__sales-statistics-bar-percentage"
    ></div>
    <span className="user__sales-statistics-bar-dater">{date}</span>
  </section>
);

const StatisticsBox = () => {
  return (
    <div className="user__sales-statistics-box">
      <div className="user__sales-statistics-box-header">
        <h1 className="user__sales-header-text">Sales of your product</h1>
        <DropDownBox />
      </div>
      <div className="user__sales-statistics-box-body">
        <div className="user__sales-stats-side">
          <span className="user__sales-stats-side-count"> 1</span>
          <span className="user__sales-stats-side-count"> 2</span>
        </div>
        <div className="user__sales-statistics-box-body-inner">
          {statsbarInfo.map((percent) => {
            return (
              <StatsiticsBar
                percentage={percent.percentage}
                date={percent.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
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
              <FaPaypal /> Sales&nbsp;Report
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
              <GrStripe /> Affiliate&nbsp;Contract
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

        <section className="user__sales-balance-body">
          <section className="user__sales-balance-first-row">
            <div className="user__sales-balance-announcer-container">
              <BalanceAnnouceCard />
              <BalanceAnnouceCard />
              <BalanceAnnouceCard purple={true}/>
            </div>
            <StatisticsBox />
          </section>

          <section className="user__sales-balance-second-row">
            <div className="user__sales-next-payout">
              {" "}
              <h3 className="user__sales-next-payout-text">NEXT PAYOUT</h3>
            </div>
            <div className="admin__home-ra-inner">
              <h3 className="admin__home-ra-header">
                Sales and activities from October 1st to October 15th
              </h3>
              <div className="admin__home-ra-content">
                {recentActivitiesData
                  ? recentActivitiesData.map((rowItem) => {
                      return (
                        <ContentRowSales
                          header={rowItem.header}
                          date={rowItem.date}
                          email={rowItem.email}
                          adminName={rowItem.adminName}
                          target={rowItem.target}
                          active={rowItem.active}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="user__sales-next-payouts">
              <BalanceAnnouceCard />
              <BalanceAnnouceCard yellow={true}/>
              <div className="user__sales-payout-withdraw-btn">
                <OrangeBtn text="WITHDRAW" style={{ padding: "1rem 5.5rem" }} />
                <IrregularBtn />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Sales;
