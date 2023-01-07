import { AiFillDislike, AiFillLike } from "react-icons/ai"
import { MdOutlineMoreVert } from "react-icons/md"
import { RiStarSFill } from "react-icons/ri"

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg"


const Comment = ({comment="Hey there am commenting", author="Leo - Art Joourney"}) => {
    return (
        <div className="buy__comm-container">
            <div className="buy__comm-first-layer">
                <div className="buy__author-field">
                    <img className="buy__user-profile-img" src={WolfGuyImg} alt="user profile"/>
                    {author}
                </div>

                <button className="buy__customer-tag">
                    <span style={{transform: "skewX(20deg)"}}>Customers</span>
                </button>
                <div className="buy__rating-container">
                    <RiStarSFill style={{color: "#747482"}}/>
                    <RiStarSFill style={{color: "#747482"}}/>
                    <RiStarSFill style={{color: "#747482"}}/>
                    <RiStarSFill style={{color: "#747482"}}/>

                </div>

                <div className="buy__comment-date">11th Feb, 2022</div>

               
                <MdOutlineMoreVert style={{cursor: "pointer", color: "#6E6E7C"}}/>
            </div>

            <div className="buy__comm-second-layer">
                <div className="buy__main-comm">
                    {comment}
                </div>
            </div>
            

            <div className="buy__comm-third-layer">
                <div className="buy__reactions-container">
                    <div className="buy__like-cont">
                       <AiFillLike /> 54
                    </div>

                    <div className="buy__dislike-cont">
                        <AiFillDislike />12
                    </div>

                    <span className="buy__comment-reply"> reply </span>
                </div>
            </div>
            

        </div>
    )
}

export default Comment
