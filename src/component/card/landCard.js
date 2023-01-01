import { RiStarSFill } from "react-icons/ri";
import { AiTwotoneMessage } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StarRating = ({rateNumber = 4}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="landing__star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`landing__rating-button  ${index <= (hover || rating) ? "landing__rating-on" : "landing__rating-off"} ${index <= rateNumber && "landing__rating-active"}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

const WhiteList = ({
  color = "#7c187a",
  degrees,
  left,
  right,
  top,
  bottom,
  isTop,
}) => {
  return (
    <div
      style={{ transform: `rotate(${degrees})`, left, right, top, bottom }}
      className="landing__card-whiteList"
    >
      {isTop && (
        <BsSuitHeartFill
          style={{
            color: "#ffffff",
            fontSize: "1.1rem",
            left: "15%",
            top: "13%",
            position: "absolute",
          }}
        />
      )}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.11 91.79">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polygon
              points="0.34 91.79 0 0.1 87.11 0 0.34 91.79"
              style={{ fill: color }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const LandCard = ({
  img,
  title,
  owner,
  firstTag,
  ratings,
  numReviewers,
  numOfComments,
  price,
}) => {
  const [activeCard, setActiveCard] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => navigate("/buy/page")}
      onMouseEnter={(e) => setActiveCard(true)}
      onMouseLeave={(e) => setActiveCard(false)}
      className="landing__card"
    >
      {activeCard && <WhiteList isTop={true} top={"-2%"} left="-2%" />}
      <img src={img} alt="" className="landing-card-img" />
      <div className={"landing__card-body"}>
        <h3 className={"landing__product-title"}>{title}</h3>
        <h5 className="landing__product-title-affirm">
          by{" "}
          <span
            className="landing__product-author"
            style={{ color: activeCard ? "#FF9700" : "#6D6D91" }}
          >
            {owner}
          </span>{" "}
          in {firstTag}
        </h5>

        <div className="landing__rating-container">
          <div className="landing__rating-container-inner">
            <StarRating rateNumber={ratings}/>
          </div>
          <div className="landing__card-stats-container">
            <span className="landing__card-stats-views">{numReviewers}</span>

            <span className="landing__card-stats-comments">
              <AiTwotoneMessage /> {numOfComments}
            </span>
          </div>
          {activeCard && (
            <WhiteList
              color={"#FF9700"}
              degrees={"180deg"}
              bottom={"10%"}
              right="-2%"
            />
          )}

          <div
            style={{ color: activeCard ? "#000000" : "#ffffff" }}
            className="landing__price"
          >
           ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
