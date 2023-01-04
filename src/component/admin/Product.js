import { useState } from "react";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import LandCard from "../card/landCard";
import TagsComp from "./TagsComp";

import data from "../../data/data.json";
import UserPurpleInnerStripeBtn from "../buttons/UserPurpleButton";
import AdminFreebiesSidebar from "./AdminFreebiesSidebar";

const TsunamiImg = "/assets/image/tsunami.jpg";
const ScaryImg = "/assets/image/scary.jpg";
const CatmanImg = "/assets/image/catman.jpg";

const coloredhouseImg = "/assets/image/coloredhouse.webp";



const Product = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const handleProductClick = () => {
    
  }

  const productInfo = [
    {
      rating: "Excellent",
    }
  ]

  const sidebarMaininfo = [
    {
      leftInfo: "Rating",
      rightInfo: "Excellent",
    },
  
    {
      leftInfo: "views this month",
      rightInfo: "814",
    },
  
    {
      leftInfo: "Total Views",
      rightInfo: "714,436",
    },

    {
      leftInfo: "WishList",
      rightInfo: "49",
    },

    {
      leftInfo: "Purchases",
      rightInfo: "16",
    },
  ];
  
  return (
    <section className="admin__freebies-container">
      <AdminFreebiesSidebar sidebarMaininfoIts={sidebarMaininfo} setActiveSideTab={setActiveSideTab} activeSideTab={activeSideTab}/>
      <div className="admin__freebies-inner-container">
        {/* <FilterSystem /> */}
        <TagsComp />
        <div className="admin__freebies-inner-container-inner">
          {data
            ? data.products.map((prod) => {
                return (
                  <LandCard
                    onClick={handleProductClick}
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
