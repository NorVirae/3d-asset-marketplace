import { useState } from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import LandCard from "../card/landCard";
import TagsComp from "./TagsComp";

import data from "../../data/data.json";
import UserPurpleInnerStripeBtn from "../buttons/UserPurpleButton";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";
const TsunamiImg = "/assets/image/tsunami.jpg";
const ScaryImg = "/assets/image/scary.jpg";
const CatmanImg = "/assets/image/catman.jpg";

const coloredhouseImg = "/assets/image/coloredhouse.webp";

const Product = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  return (
    <section className="admin__freebies-container">
      <section className="admin__freebies-sidebar">
        <div className="admin__freebies-header">
          <section className="admin__freebies-sidebar-header">
            <div
              onClick={() => setActiveSideTab("all-products")}
              className={`admin__freebies-sidebar-header-item ${
                activeSideTab === "all-products" &&
                "admin__freebies-sidebar-header-item-active"
              }`}
            >
              ALL&nbsp;PRODUCTS
            </div>

            <div
              onClick={() => setActiveSideTab("features")}
              className={`admin__freebies-sidebar-header-item ${
                activeSideTab === "features" &&
                "admin__freebies-sidebar-header-item-active"
              }`}
            >
              FEATURES
            </div>

            <div
              onClick={() => setActiveSideTab("daily-picks")}
              className={`admin__freebies-sidebar-header-item ${
                activeSideTab === "daily-picks" &&
                "admin__freebies-sidebar-header-item-active"
              }`}
            >
              DAILY&nbsp;PICKS
            </div>
          </section>
          <div className="admin__sidebar-profile-container">
            <div className="admin__sidebar-img-container">
              <img
                className="admin__sidebar-img"
                src={WolfGuyImg}
                alt="wolf-img"
              />
            </div>
            <h3>Beach House with Rumps</h3>
            <h6>By Pascal Garten in 3D assets</h6>
            <div className="admin__sidebar-rating-container">
              <span className="admin__main-rating-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4</span>
              </span>

              <span className="admin__sidebar-message-container">
                <AiTwotoneMessage />
                <span>0</span>
              </span>
            </div>
          </div>

          <section className="admin__sidebar-info">
            <div className="admin__sidebar-info-field">
              <span className="admin__sidebar-info-field-left">Rating</span>
              <span className="admin__sidebar-info-field-right">Excellent</span>
            </div>

            <div className="admin__sidebar-info-field">
              <span className="admin__sidebar-info-field-left">
                views this month
              </span>
              <span className="admin__sidebar-info-field-right">814</span>
            </div>

            <div className="admin__sidebar-info-field">
              <span className="admin__sidebar-info-field-left">
                Total Views
              </span>
              <span className="admin__sidebar-info-field-right">714,436</span>
            </div>

            <div className="admin__sidebar-info-field">
              <span className="admin__sidebar-info-field-left">WishList</span>
              <span className="admin__sidebar-info-field-right">49</span>
            </div>

            <div className="admin__sidebar-info-field">
              <span className="admin__sidebar-info-field-left">Purchases</span>
              <span className="admin__sidebar-info-field-right">16</span>
            </div>

            <div  className="admin__sidebar-info-field btn">
              <UserPurpleInnerStripeBtn style={{width: "40%"}} text={"VIEW STORE"}/>
            </div>
          </section>
        </div>
      </section>
      <div className="admin__freebies-inner-container">
        {/* <FilterSystem /> */}
        <TagsComp />
        <div className="admin__freebies-inner-container-inner">
          {data
            ? data.products.map((prod) => {
                return (
                  <LandCard
                    img={prod.image}
                    title={prod.title}
                    ratings={prod.ratings}
                    owner={prod.ownerName}
                    numOfComments={prod.numOfComments}
                    numReviewers={prod.numReviewers}
                    price={prod.price}
                    firstTag={prod.firstTag}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default Product;
