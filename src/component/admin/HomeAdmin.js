import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Calendar, DateRangePicker } from "react-date-range";
import { BsTriangleFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const HomeCard = ({
  textHeaderLeft = "Users",
  textHeaderRight = "Total",
  mainFigure = "10.74m",
  mainFigureDescription = "Newly Signed up",
  newActive = false,
  childrenComp = <span>20,000</span>,
}) => {
  return (
    <section className={`admin__home-card ${newActive && "bordered"}`}>
      {newActive && (
        <BsTriangleFill
          className={"admin__home-card-arrow-pointer"}
          style={{ color: "#7C187A" }}
        />
      )}
      <div className="admin__home-card-title-header">
        <span className="admin__home-card-title-left">{textHeaderLeft}</span>
        <span className="admin__home-card-title-right">{textHeaderRight}</span>
      </div>
      <div className="admin__home-card-title-body">
        <div
          className={`admin__hc-inactive-box ${newActive && "purpled"}`}
        ></div>
        <div className="admin__hc-inner-total-container">
          <h3 className="admin__hc-content-first-header">{mainFigure}</h3>
          <h4 className="admin__hc-content-second-header">
            {mainFigureDescription}
          </h4>
          <h5 className="admin__hc-content-third-header">{childrenComp}</h5>
        </div>
      </div>
    </section>
  );
};

const ContentHeaderField = ({ text, active }) => {
  return (
    <span className={` admin__home-ra-cr-header-field ${active && "active"} `}>
      Blocked
    </span>
  );
};

const ContentField = ({ text }) => {
  return <span className="admin__home-ra-cr-field">Nov 5, 2022</span>;
};

const ContentRow = () => {
  return (
    <div className="admin__home-ra-content-row">
      <ContentHeaderField />
      <ContentField />
      <ContentField />
      <ContentField />
      <ContentField />
    </div>
  );
};

const HomeAdmin = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  return (
    <div className="admin__home-container">
      <section className="admin__home-inner-container">
        <HomeCard
          mainFigure="10.74m"
          mainFigureDescription="Newly signed up"
          textHeaderLeft={"Users"}
          textHeaderRight={"Total"}
          childrenComp={<span>20,000</span>}
        />
        <HomeCard
          mainFigure="42.8k"
          mainFigureDescription="Store request"
          textHeaderLeft={"Stores"}
          textHeaderRight={"Total"}
          childrenComp={
            <div className="admin__home-card-child-container">
              0 <GrMail />
            </div>
          }
        />
        <HomeCard
          mainFigure="15.2k"
          mainFigureDescription="Closed"
          textHeaderLeft={"Affiliates"}
          textHeaderRight={"Total"}
          childrenComp={<span>85% {"(Today)"}</span>}
        />
        <HomeCard
          mainFigure="10.8k"
          mainFigureDescription="Products on wishlist & cart"
          textHeaderLeft={"Products"}
          textHeaderRight={"Total"}
          childrenComp={
            <div className="admin__home-card-child-container">
              <span className="admin__home-card-child-container">
                <FaHeart />
                2430
              </span>{" "}
              <span className="admin__home-card-child-container">
                <FaShoppingCart />
                2430
              </span>
            </div>
          }
        />
        <HomeCard
          mainFigure="$100.9m"
          mainFigureDescription="Total Withdrawn"
          textHeaderLeft={"Revenue"}
          textHeaderRight={"Total Revenue Generated"}
          newActive={true}
          childrenComp={<span>$99m</span>}
        />
        <HomeCard
          mainFigure="$1.9m"
          mainFigureDescription="Payment Request"
          textHeaderLeft={"Payout"}
          textHeaderRight={"Total Balance"}
          newActive={true}
          childrenComp={
            <div style={{color: "#FF9700"}} className="admin__home-card-child-container">
             <GrMail /> 52 
            </div>
          }
        />
      </section>
      <section className="admin__home-ra-container">
        <div className="admin__home-ra-inner">
          <h3 className="admin__home-ra-header">Recent Activities</h3>
          <div className="admin__home-ra-content">
            <ContentRow />
            <ContentRow />
            <ContentRow />
            <ContentRow />
            <ContentRow />
          </div>
        </div>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      </section>
    </div>
  );
};

export default HomeAdmin;
