
import { BsBack, BsTriangleFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import HomeCard from "../home/HomeCard";
import ContentRow from "../home/ContentRow";











const HomeAdmin = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const recentActivitiesData = [
    {
      header: "Blocked",
      date: "Nov 5, 2022",
      target: "User",
      email: "Stevenjames82939@gmail.com",
      adminName: "@Admin.joe",
      active: false,
    },
    {
      header: "Approved",
      date: "Nov 4, 2022",
      target: "Store",
      email: "Jat@gmail.com",
      adminName: "@Admin.katsi",
      active: false,
    },
    {
      header: "Paid",
      date: "Nov 1, 2022",
      target: "User",
      email: "Osos@gmail.com",
      adminName: "@Admin.muscow",
      active: true,
    },
    {
      header: "Postponed",
      date: "Oct 5, 2022",
      target: "Affiliate",
      email: "Keenman@gmail.com",
      adminName: "@Admin.rosco",
      active: true,
    },
    {
      header: "Paid",
      date: "Sept 24, 2022",
      target: "Store",
      email: "ajasco@gmail.com",
      adminName: "@Admin.cumsou",
      active: true,
    },
  ];

  const handleSelect = (ranges) => {
    // console.log(ranges);
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
          mainFigureDescription="Wishlist & Cart"
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
          childrenComp={<span style={{color:"#919198"}}>$99m</span>}
        />
        <HomeCard
          mainFigure="$1.9m"
          mainFigureDescription="Payment Request"
          textHeaderLeft={"Payout"}
          textHeaderRight={"Total Balance"}
          newActive={true}
          childrenComp={
            <div
              style={{ color: "#FF9700" }}
              className="admin__home-card-child-container"
            >
              <GrMail /> 52
            </div>
          }
        />
      </section>
      <section className="admin__home-ra-container">
        <div className="admin__home-ra-inner">
          <h3 className="admin__home-ra-header">Recent Activities</h3>
          <div className="admin__home-ra-content">
            {recentActivitiesData
              ? recentActivitiesData.map((rowItem) => {
                  return (
                    <ContentRow
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
        {/* <DateRange  color={"#000000"} className="oso" ranges={[selectionRange]} onChange={handleSelect} /> */}
      </section>
    </div>
  );
};

export default HomeAdmin;
